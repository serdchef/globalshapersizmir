import type { NextApiRequest, NextApiResponse } from 'next'
import * as AI from 'ai'
import { google } from '@ai-sdk/google'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = req.body || {}

    // Accept either { messages: [...] } (chat history) or { message: 'text' }
    const messages = body.messages || (body.message ? [{ role: 'user', content: body.message }] : [])

    const modelName = process.env.GEMINI_MODEL || process.env.GOOGLE_MODEL || 'gemini-1.5-pro'
    const model = google(modelName)

    // Access streamText from the AI module
    const streamTextFn = (AI as any).streamText || (AI as any).default?.streamText
    if (!streamTextFn) {
      return res.status(500).json({ error: 'streamText not available in ai package' })
    }

    const result = await streamTextFn({ model, messages })

    // Try to return text output when possible
    const text = (result as any)?.text || (result as any)?.output || JSON.stringify(result)
    return res.status(200).json({ text })
  } catch (err) {
    console.error('pages/api/chat error:', err)
    return res.status(500).json({
      error: 'Failed to generate text',
      details: err instanceof Error ? err.message : String(err),
    })
  }
}
