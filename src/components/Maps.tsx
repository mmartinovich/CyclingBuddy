import React, { useState } from 'react'
import { Upload, CheckCircle } from 'lucide-react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('./Map'), { ssr: false })

interface UploadedMap {
  id: string;
  name: string;
  uploadDate: string;
  coordinates: [number, number][];
}

const initialMaps: UploadedMap[] = [
  {
    id: '1',
    name: 'Central Park Loop.gpx',
    uploadDate: '2024-03-22',
    coordinates: [
      [40.7812, -73.9665],
      [40.7682, -73.9719],
      [40.7642, -73.9731],
      [40.7669, -73.9813],
      [40.7800, -73.9738],
      [40.7812, -73.9665]
    ]
  },
  {
    id: '2',
    name: 'Brooklyn Bridge Ride.tcx',
    uploadDate: '2024-03-23',
    coordinates: [
      [40.7127, -74.0134],
      [40.7068, -73.9973],
      [40.7057, -73.9964],
      [40.7046, -73.9954],
      [40.6977, -73.9887],
      [40.6932, -73.9839]
    ]
  }
];

const Maps: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle')
  const [uploadedMaps, setUploadedMaps] = useState<UploadedMap[]>(initialMaps)
  const [selectedMap, setSelectedMap] = useState<UploadedMap | null>(initialMaps[0])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setUploadStatus('idle')
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      setUploadStatus('uploading')
      // Simulate upload process
      setTimeout(() => {
        const newMap: UploadedMap = {
          id: Date.now().toString(),
          name: selectedFile.name,
          uploadDate: new Date().toISOString().split('T')[0],
          coordinates: generateRandomCoordinates(),
        }
        setUploadedMaps([...uploadedMaps, newMap])
        setSelectedMap(newMap)
        setUploadStatus('success')
        setSelectedFile(null)
      }, 2000)
    }
  }

  const handleMapSelect = (map: UploadedMap) => {
    setSelectedMap(map)
  }

  const generateRandomCoordinates = (): [number, number][] => {
    const centerLat = 40.7128 + (Math.random() - 0.5) * 0.1
    const centerLng = -74.0060 + (Math.random() - 0.5) * 0.1
    return Array.from({ length: 5 }, (_, i) => [
      centerLat + (Math.random() - 0.5) * 0.01,
      centerLng + (Math.random() - 0.5) * 0.01
    ]) as [number, number][]
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Upload and View Maps</h2>
      <div className="mb-4">
        <label htmlFor="map-file" className="block text-sm font-medium text-gray-700 mb-2">
          Select a GPX or TCX file
        </label>
        <input
          type="file"
          id="map-file"
          accept=".gpx,.tcx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      <button
        onClick={handleUpload}
        disabled={!selectedFile || uploadStatus === 'uploading' || uploadStatus === 'success'}
        className={`flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md ${
          !selectedFile || uploadStatus === 'success'
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {uploadStatus === 'uploading' ? (
          <>
            <Upload className="animate-spin mr-2" size={20} />
            Uploading...
          </>
        ) : uploadStatus === 'success' ? (
          <>
            <CheckCircle className="mr-2" size={20} />
            Upload Successful
          </>
        ) : (
          <>
            <Upload className="mr-2" size={20} />
            Upload Map
          </>
        )}
      </button>

      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Uploaded Maps</h3>
          <div className="space-y-4">
            {uploadedMaps.map((map) => (
              <div
                key={map.id}
                className={`p-4 border rounded-md cursor-pointer ${
                  selectedMap?.id === map.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => handleMapSelect(map)}
              >
                <div className="flex items-center">
                  <div>
                    <p className="font-medium">{map.name}</p>
                    <p className="text-sm text-gray-500">Uploaded on: {map.uploadDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold mb-4">Map Preview</h3>
          {selectedMap ? (
            <div className="border border-gray-200 rounded-md p-4">
              <p className="font-medium">{selectedMap.name}</p>
              <p className="text-sm text-gray-500 mb-4">Uploaded on: {selectedMap.uploadDate}</p>
              <div className="h-96 w-full">
                <MapWithNoSSR
                  center={selectedMap.coordinates[0]}
                  zoom={13}
                  scrollWheelZoom={false}
                  positions={selectedMap.coordinates}
                />
              </div>
            </div>
          ) : (
            <p>No map selected. Please upload or select a map to view the preview.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Maps