import { test } from '@japa/runner'

test('chatbot creates event', async ({ client }) => {
  const response = await client.post('/chatbot').json({ message: 'Schedule a meeting tomorrow at 3 PM' })
  response.assertStatus(200)
  response.assertBodyContains({ message: 'Event created' })
})