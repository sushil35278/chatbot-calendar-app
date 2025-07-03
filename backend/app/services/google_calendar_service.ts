import { google } from 'googleapis'

export default class GoogleCalendarService {
  private static getOAuth2Client() {
    const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI, GOOGLE_REFRESH_TOKEN } = process.env
    const oAuth2Client = new google.auth.OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GOOGLE_REDIRECT_URI
    )
    oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN })
    return oAuth2Client
  }

  public static async createEvent(eventDetails: { title: string, date: string, time: string }) {
    const calendar = google.calendar({ version: 'v3', auth: this.getOAuth2Client() })
    const startDateTime = new Date(`${eventDetails.date}T${eventDetails.time}`)
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000) // 1 hour

    const event = {
      summary: eventDetails.title,
      start: { dateTime: startDateTime.toISOString() },
      end: { dateTime: endDateTime.toISOString() }
    }

    const result = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event
    })

    return {
      id: result.data.id,
      start_time: startDateTime,
      end_time: endDateTime,
      ...result.data
    }
  }
}