import React from 'react'
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  center: [number, number]
  zoom: number
  scrollWheelZoom: boolean
  positions: [number, number][]
}

const Map: React.FC<MapProps> = ({ center, zoom, scrollWheelZoom, positions }) => {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={scrollWheelZoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={positions} />
    </MapContainer>
  )
}

export default Map