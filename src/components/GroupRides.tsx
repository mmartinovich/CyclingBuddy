import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

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

interface GroupRidesProps {
  showLimited: boolean
}

const GroupRides: React.FC<GroupRidesProps> = ({ showLimited }) => {
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

  const displayedRides = showLimited ? rides.slice(0, 3) : rides

  return (
    <div className="bg-white rounded-[20px] p-8 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-navy-700">Upcoming Rides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedRides.map((ride) => (
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
              <Link href={`/rides/${ride.id}`} className="bg-brand-500 text-white px-4 py-2 rounded hover:bg-brand-600">
                Join Ride
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupRides