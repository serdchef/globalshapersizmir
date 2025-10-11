// Importing 'ai' dynamically below to support different SDK export shapes
import { google } from '@ai-sdk/google'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Accept either { messages: [...] } (chat history) or { message: 'text' }
    const messages = body.messages || (body.message ? [{ role: 'user', content: body.message }] : [])

    const modelName = process.env.GEMINI_MODEL || process.env.GOOGLE_MODEL || 'gemini-1.5-pro'

    // The `google(...)` factory picks up credentials from env (GEMINI_API_KEY / GOOGLE_API_KEY)
    const model = google(modelName)

    // Dynamically import the 'ai' SDK so we don't hard-fail on different export shapes.
    const ai = await import('ai')

    // Prefer a streaming API if available, otherwise fall back to a text generator.
    const streamFn = (ai as any).streamText ?? (ai as any).default ?? (ai as any).generateText

    if (!streamFn) {
      console.warn('AI SDK does not expose streamText or generateText')
      return NextResponse.json({ error: 'AI SDK not available' }, { status: 500 })
    }

    const result = await streamFn({ model, messages })

    // If the result exposes toAIStreamResponse, return it directly (streams to client).
    if (result && typeof (result as any)?.toAIStreamResponse === 'function') {
      return (result as any).toAIStreamResponse()
    }

    // Otherwise, attempt to extract text and return JSON (non-streaming fallback).
    const text = (result as any)?.text || (result as any)?.output || JSON.stringify(result)
    return NextResponse.json({ text })
  } catch (err) {
    console.error('app/api/chat error:', err)
    return NextResponse.json({ error: 'Failed to generate text', details: err instanceof Error ? err.message : String(err) }, { status: 500 })
  }
}
