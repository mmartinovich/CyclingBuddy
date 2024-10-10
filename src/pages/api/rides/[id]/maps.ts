import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../../lib/db'

interface Map {
  id: string;
  name: string;
  uploadDate: string;
  coordinates: [number, number][];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    if (typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid ride ID' })
    }

    const maps = db.getMaps().filter(map => map.rideId === parseInt(id))
    res.status(200).json(maps)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}