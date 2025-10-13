import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Hard-coded to the current HEAD commit at the time of creating this file.
  // Update this file or check its value after deploy to confirm Vercel is using the latest commit.
  const commit = '62d4f20'
  const now = new Date().toISOString()

  res.status(200).json({ commit, now })
}
