# Google Calendar Chatbot Backend

This is the backend for the Chatbot Calendar App, built with AdonisJS. It integrates with the Google Gemini API for natural language understanding and the Google Calendar API for event management.

## Features

- RESTful API for chatbot interaction
- Natural language event parsing via Gemini API
- Google Calendar event creation
- SQLite for local event logging
- Modular, SOLID, and DRY code
- Unit and integration tests (AdonisJS Vow)
- Ready for CI/CD and Heroku deployment

## Setup

1. **Clone the repo and install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your Google and Gemini API credentials.

3. **Run database migrations:**
   ```bash
   node ace migration:run
   ```

4. **Start the server:**
   ```bash
   node ace serve --watch
   ```

5. **Run tests:**
   ```bash
   npm run test
   ```

## API

- **POST /chatbot**
  - Body: `{ "message": "Schedule meeting tomorrow at 3pm" }`
  - Response: `{ "message": "Event created", "event": { ... } }`

## Deployment

- Set environment variables on Heroku.
- Use the provided GitHub Actions workflow for CI/CD.

## License

MIT