import axios from 'axios'

export default class GeminiService {
  public static async parseEventDetails(message: string) {
    const apiKey = process.env.GEMINI_API_KEY
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

    const prompt = `
    Extract event details from the following message:
    "${message}"
    
    Respond ONLY with a JSON object with exactly these keys: "title", "date", "time".
    - "title": the event title as a string
    - "date": the date in YYYY-MM-DD format
    - "time": the time in HH:MM 24-hour format
    
    Example:
    {"title": "Team Meeting", "date": "2024-06-10", "time": "15:00"}
    `

    try {
      const response = await axios.post(url, {
        contents: [{ parts: [{ text: prompt }] }]
      })
      let text = response.data.candidates[0].content.parts[0].text
      console.log('Gemini raw output:', text)
      text = text.replace(/```json|```/g, '').trim()
      return JSON.parse(text)
    } catch (error: any) {
      console.error('Gemini API error:', error.response?.data || error.message)
      throw error
    }
  }
}