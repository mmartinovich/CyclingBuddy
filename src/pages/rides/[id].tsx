import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import dynamic from 'next/dynamic'
import JoinRideModal from '../../components/JoinRideModal'
import RideChat from '../../components/RideChat'

const MapWithNoSSR = dynamic(() => import('../../components/Map'), { ssr: false })

interface Ride {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  participants: string[]
  mapCoordinates: [number, number][]
}

// This would typically come from an API or database
const rides: Ride[] = [
  {
    id: 1,
    title: "Saturday Morning City Loop",
    date: "2024-03-30",
    time: "08:00 AM",
    location: "Central Park",
    description: "A leisurely ride around the city's most scenic spots.",
    participants: ["Alice", "Bob", "Charlie"],
    mapCoordinates: [[40.7829, -73.9654], [40.7735, -73.9712], [40.7688, -73.9820]]
  },
  {
    id: 2,
    title: "Sunday Hill Climb Challenge",
    date: "2024-03-31",
    time: "07:30 AM",
    location: "Mountain View Park",
    description: "Test your endurance with this challenging hill climb.",
    participants: ["David", "Emma", "Frank"],
    mapCoordinates: [[37.4220, -122.0841], [37.4283, -122.1076], [37.4035, -122.0868]]
  },
  {
    id: 3,
    title: "Midweek Evening Ride",
    date: "2024-04-03",
    time: "06:00 PM",
    location: "Riverside Path",
    description: "Unwind after work with a relaxing ride along the river.",
    participants: ["Grace", "Henry"],
    mapCoordinates: [[40.7185, -74.0132], [40.7223, -74.0094], [40.7262, -74.0056]]
  },
  {
    id: 4,
    title: "Weekend Long Distance Ride",
    date: "2024-04-06",
    time: "06:30 AM",
    location: "Countryside Road",
    description: "A long-distance ride through scenic countryside routes.",
    participants: ["Ivy", "Jack", "Kelly", "Liam"],
    mapCoordinates: [[41.8781, -87.6298], [41.9032, -87.6700], [41.9484, -87.6553]]
  }
]

const RideDetails: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ride, setRide] = useState<Ride | undefined>(undefined)

  useEffect(() => {
    if (id) {
      const foundRide = rides.find(r => r.id === Number(id))
      setRide(foundRide)
    }
  }, [id])

  if (!ride) {
    return <div>Loading...</div>
  }

  const handleJoinRide = (name: string) => {
    setRide(prevRide => ({
      ...prevRide!,
      participants: [...prevRide!.participants, name]
    }))
    setIsModalOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-[20px] p-8 shadow-md mb-8">
        <h2 className="text-3xl font-bold mb-6 text-navy-700">{ride.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{ride.date}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Clock className="w-5 h-5 mr-2" />
              <span>{ride.time}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{ride.location}</span>
            </div>
            <p className="text-gray-700 mb-6">{ride.description}</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-navy-700">Participants</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Users className="w-5 h-5 mr-2" />
                <span>{ride.participants.length} participants</span>
              </div>
              <ul className="list-disc list-inside">
                {ride.participants.map((participant, index) => (
                  <li key={index}>{participant}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-500 text-white px-6 py-2 rounded-full hover:bg-brand-600 transition-colors duration-200"
            >
              Join This Ride
            </button>
          </div>
          <div className="h-96">
            <MapWithNoSSR 
              center={ride.mapCoordinates[0]} 
              zoom={12} 
              scrollWheelZoom={false} 
              positions={ride.mapCoordinates} 
            />
          </div>
        </div>
      </div>
      
      <RideChat rideId={ride.id} />

      <JoinRideModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onJoin={handleJoinRide}
      />
    </div>
  )
}

export default RideDetails