// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getClient } from 'lib/launchdarkly-server'

type Data = { featureFlag: boolean | 'defaultValue' }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await getClient()
  const featureFlag = await client.variation(
    'feature-flag',
    { key: 'anonymous' },
    'defaultValue'
  )

  res.status(200).json({ featureFlag })
}
