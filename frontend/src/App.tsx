import React, { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponse(null)
    try {
      const res = await fetch('/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setResponse({ error: 'Failed to connect to backend.' })
    }
    setLoading(false)
  }

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Chatbot Calendar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="e.g. Schedule meeting tomorrow at 3pm"
          style={{ width: '100%', padding: 8, fontSize: 16 }}
        />
        <button type="submit" disabled={loading} style={{ marginTop: 8 }}>
          {loading ? 'Processing...' : 'Send'}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: 16 }}>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default App