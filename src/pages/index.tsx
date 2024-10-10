import React from 'react'
import LandingHero from '@/components/LandingHero'
import GroupRides from '@/components/GroupRides'

export default function Home() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center mt-8">Welcome to Cycle Buddy</h1>
      <LandingHero />
      <GroupRides showLimited={true} />
    </div>
  )
}