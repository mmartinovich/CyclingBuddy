import React from 'react'

const LandingHero: React.FC = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden bg-black">
      <img
        src="https://img.goodfon.com/original/2880x1800/4/3c/triathletes-sportsmeny-muzhchiny-velosipedisty-triatlon-gonk.jpg"
        alt="Dynamic cyclists in action"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-end text-white px-8 sm:px-16 md:px-24 lg:px-32">
        <div className="max-w-lg text-right">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Do not ride alone ...</h1>
          <p className="text-lg sm:text-xl mb-8">Join Cycle Buddy and discover amazing group rides that push your limits and forge lasting connections.</p>
          <button className="bg-brand-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-brand-600 transition-colors duration-200 shadow-lg">
            Find Your Next Ride
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingHero