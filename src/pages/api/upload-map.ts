import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // In a real application, you would parse the file and extract coordinates here
    // For this example, we'll just use dummy data
    const newMap = {
      rideId: parseInt(req.body.rideId) || 1, // Default to ride 1 if not provided
      name: req.body.name || 'Uploaded Map',
      uploadDate: new Date().toISOString().split('T')[0],
      coordinates: JSON.stringify([
        [40.7128, -74.0060],
        [40.7129, -74.0061],
        [40.7130, -74.0062],
      ])
    };

    const addedMap = db.addMap(newMap);
    res.status(200).json(addedMap);
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}