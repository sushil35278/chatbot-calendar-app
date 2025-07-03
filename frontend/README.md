# Google Calendar Chatbot Frontend

This is the frontend for the Chatbot Calendar App, built with React and Vite.

## Features

- Simple chat interface for sending natural language event requests
- Displays responses from the backend
- Easy to run and develop locally

## Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

3. **Proxy Setup:**
   - The frontend is configured to proxy `/chatbot` requests to the backend at `http://localhost:3333`.

## Usage

- Enter a message like "Schedule meeting tomorrow at 3pm" and submit.
- The response will show the event details created in your Google Calendar.

## Build

```bash
npm run build
```

## License

MIT