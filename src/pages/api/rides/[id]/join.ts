import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id } = req.query;
    const { name } = req.body;

    if (typeof id !== 'string' || !name) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const success = db.joinRide(parseInt(id), name);

    if (success) {
      res.status(200).json({ message: 'Successfully joined the ride' });
    } else {
      res.status(404).json({ error: 'Ride not found' });
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}