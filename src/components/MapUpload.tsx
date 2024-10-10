import React, { useState, useEffect } from 'react'
import { Upload, CheckCircle } from 'lucide-react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('./Map'), { ssr: false })

interface UploadedMap {
  id: string;
  name: string;
  uploadDate: string;
  coordinates: [number, number][];
}

const MapUpload: React.FC = () => {
  // ... (keep the existing state and functions)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Strava or Garmin Map</h2>
      {/* ... (keep the rest of the component's JSX) */}
    </div>
  )
}

export default MapUpload