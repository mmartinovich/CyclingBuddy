import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Home, Users, Map, ShoppingBag } from 'lucide-react'

const Sidebar = () => {
  const router = useRouter()

  const isActive = (path: string) => router.pathname === path

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/rides', icon: Users, label: 'Rides' },
    { path: '/maps', icon: Map, label: 'Maps' },
    { path: '/marketplace', icon: ShoppingBag, label: 'Marketplace' },
  ]

  return (
    <div className="bg-white shadow-xl h-full w-64 flex flex-col">
      <div className="p-5">
        <h1 className="text-2xl font-bold text-navy-700">Cycle Buddy</h1>
      </div>
      <nav className="flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-5 py-3 text-gray-600 transition-colors duration-200 ${
              isActive(item.path)
                ? 'bg-brand-50 text-brand-500 font-semibold'
                : 'hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar