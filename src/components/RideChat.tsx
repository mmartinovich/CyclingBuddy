import React, { useState, useEffect } from 'react'
import { Send } from 'lucide-react'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

interface RideChatProps {
  rideId: number
}

const RideChat: React.FC<RideChatProps> = ({ rideId }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    // Simulating fetching messages from a server
    const fetchedMessages: Message[] = [
      { id: 1, sender: 'Alice', content: 'Hey everyone! Excited for this ride!', timestamp: '2024-03-22 10:15' },
      { id: 2, sender: 'Bob', content: 'Same here! What gear is everyone bringing?', timestamp: '2024-03-22 10:18' },
    ]
    setMessages(fetchedMessages)
  }, [rideId])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() === '') return

    const message: Message = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleString(),
    }

    setMessages([...messages, message])
    setNewMessage('')
  }

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-navy-700">Ride Chat</h3>
      <div className="h-64 overflow-y-auto mb-4 border border-gray-200 rounded p-4">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            <div className="font-semibold text-brand-500">{message.sender}</div>
            <div className="text-gray-700">{message.content}</div>
            <div className="text-xs text-gray-500">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-brand-500 text-white px-4 py-2 rounded-r hover:bg-brand-600 flex items-center"
        >
          <Send size={20} className="mr-2" />
          Send
        </button>
      </form>
    </div>
  )
}

export default RideChat