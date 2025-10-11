"use client"
import { useChat } from 'ai/react'
import { useRef, useState, useEffect } from 'react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: '/api/chat' })
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m: any) => (
          <div key={m.id} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200'}`}>
            {m.content}
          </div>
        ))}
        {isLoading && <div>Yükleniyor...</div>}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Mesajınızı yazın..."
          className="w-full p-2 border rounded"
        />
      </form>
    </div>
  )
}
