import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react'
import JoinRideModal from '@/components/JoinRideModal'
import NewRideModal from '@/components/NewRideModal'
import { Ride } from '@/data/rides'

export default function RidesPage() {
  const [rides, setRides] = useState<Ride[]>([])
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const [isNewRideModalOpen, setIsNewRideModalOpen] = useState(false)
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchRides()
  }, [])

  const fetchRides = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/rides')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setRides(data)
      setError(null)
    } catch (error) {
      console.error('Error fetching rides:', error)
      setError('Failed to load rides. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleJoinRide = (ride: Ride) => {
    setSelectedRide(ride)
    setIsJoinModalOpen(true)
  }

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false)
    setSelectedRide(null)
  }

  const handleJoin = async (name: string) => {
    if (selectedRide) {
      try {
        const response = await fetch(`/api/rides/${selectedRide.id}/join`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        })

        if (!response.ok) {
          throw new Error('Failed to join ride')
        }

        await fetchRides()
        handleCloseJoinModal()
      } catch (error) {
        console.error('Error joining ride:', error)
        setError('Failed to join ride. Please try again.')
      }
    }
  }

  const handleAddRide = async (newRide: Omit<Ride, 'id' | 'participants'>) => {
    try {
      const response = await fetch('/api/rides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRide),
      })

      if (!response.ok) {
        throw new Error('Failed to add new ride')
      }

      await fetchRides()
      setIsNewRideModalOpen(false)
    } catch (error) {
      console.error('Error adding new ride:', error)
      setError('Failed to add new ride. Please try again.')
    }
  }

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-navy-700">All Rides</h1>
        <button
          onClick={() => setIsNewRideModalOpen(true)}
          className="bg-brand-500 text-white px-4 py-2 rounded-full hover:bg-brand-600 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add New Ride
        </button>
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rides.map((ride) => (
          <div key={ride.id} className="bg-white rounded-[20px] p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-navy-700">{ride.title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{ride.date}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>{ride.time}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{ride.location}</span>
            </div>
            <p className="text-gray-700 mb-4">{ride.description}</p>
            <div className="flex items-center text-gray-600 mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>{ride.participants.length} participants</span>
            </div>
            <div className="flex justify-between mt-4">
              <Link href={`/rides/${ride.id}`} className="text-brand-500 hover:text-brand-600">
                View Details
              </Link>
              <button
                onClick={() => handleJoinRide(ride)}
                className="bg-brand-500 text-white px-4 py-2 rounded hover:bg-brand-600"
              >
                Join Ride
              </button>
            </div>
          </div>
        ))}
      </div>
      <JoinRideModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
        onJoin={handleJoin}
      />
      <NewRideModal
        isOpen={isNewRideModalOpen}
        onClose={() => setIsNewRideModalOpen(false)}
        onAddRide={handleAddRide}
      />
    </div>
  )
}