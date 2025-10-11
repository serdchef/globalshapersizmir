import type { NextApiRequest, NextApiResponse } from 'next'

type ChatResponse = {
  response?: string  // Frontend expects this
  reply?: string     // Backend compatibility
  meta?: any
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, session_id } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    // If a custom backend is configured, proxy the request there.
    const backendUrl = process.env.BACKEND_URL
    if (backendUrl) {
      const response = await fetch(`${backendUrl.replace(/\/$/, '')}/api/v1/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: session_id || `guest_${Date.now()}`,
          message: message,
          lang: 'tr',
          mode: 'auto',
          conversation_history: []
        }),
      })

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`)
      }

      const data = await response.json()
      return res.status(200).json({ response: data.reply, reply: data.reply, meta: data.meta })
    }

    // Otherwise, use Google AI Studio (Generative Language) if API key is provided.
    const key = process.env.GOOGLE_API_KEY
    if (!key) {
      return res.status(500).json({ error: 'No backend configured and GOOGLE_API_KEY is not set' })
    }

    // Model can be overridden via env var; sensible default is `text-bison-001`.
    const model = process.env.GOOGLE_MODEL || 'text-bison-001'
    const url = `https://generativelanguage.googleapis.com/v1beta2/models/${model}:generateText?key=${encodeURIComponent(key)}`

    const glBody = {
      prompt: { text: message },
      temperature: 0.2,
      maxOutputTokens: 512,
    }

    const gResp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(glBody),
    })

    if (!gResp.ok) {
      const txt = await gResp.text()
      throw new Error(`Google API error ${gResp.status}: ${txt}`)
    }

    const gData = await gResp.json()

    // Response shape varies; prefer candidates[0].output for text-bison style models.
    const reply = gData?.candidates?.[0]?.output || gData?.candidates?.[0]?.content || gData?.output || JSON.stringify(gData)

    return res.status(200).json({ response: reply, reply: reply, meta: { provider: 'google', model } })

  } catch (error) {
    // Do NOT log sensitive env values. Log error message only.
    console.error('ShapeBot API Error:', (error instanceof Error ? error.message : String(error)))
    return res.status(503).json({
      error: 'ShapeBot is currently unavailable. Please try again later.',
      meta: { error_details: error instanceof Error ? error.message : 'Unknown error' }
    })
  }
}
