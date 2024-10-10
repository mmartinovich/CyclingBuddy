import React, { useState } from 'react'
import { X } from 'lucide-react'

interface JoinRideModalProps {
  isOpen: boolean
  onClose: () => void
  onJoin: (name: string) => void
}

const JoinRideModal: React.FC<JoinRideModalProps> = ({ isOpen, onClose, onJoin }) => {
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onJoin(name.trim())
      setName('')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-[20px] p-8 w-full max-w-md relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-navy-700 mb-6">Join Ride</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-500 text-white px-4 py-2 rounded-md hover:bg-brand-600 transition-colors duration-200"
          >
            Join Ride
          </button>
        </form>
      </div>
    </div>
  )
}

export default JoinRideModal