import { HttpContext } from '@adonisjs/core/http'
import GeminiService from '../services/gemini_service.js'
import GoogleCalendarService from '../services/google_calendar_service.js'
import { Event } from '../models/event.js'

export default class ChatbotsController {
  async interact({ request, response }: HttpContext) {
    const message = request.input('message')
    if (!message) return response.badRequest({ error: 'Message is required' })

    // 1. Parse event details using Gemini
    const eventDetails = await GeminiService.parseEventDetails(message)
    if (!eventDetails.title || !eventDetails.date || !eventDetails.time) {
      return response.badRequest({ error: 'Could not extract event details from message.' })
    }

    // 2. Create event in Google Calendar
    const googleEvent = await GoogleCalendarService.createEvent(eventDetails)

    // 3. Store in local DB
    const event = await Event.create({
      title: eventDetails.title,
      start_time: googleEvent.start_time,
      end_time: googleEvent.end_time,
      google_event_id: googleEvent.id || undefined,
    })

    return response.ok({ message: 'Event created', event })
  }
}