import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const rides = db.getRides()
      res.status(200).json(rides)
    } catch (error) {
      console.error('Error fetching rides:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else if (req.method === 'POST') {
    try {
      const { title, date, time, location, description } = req.body
      const newRide = db.addRide({ title, date, time, location, description })
      res.status(201).json(newRide)
    } catch (error) {
      console.error('Error adding new ride:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}