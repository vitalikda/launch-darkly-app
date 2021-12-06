// Next.js Server-side Rendering
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
import type { NextPage } from 'next'
import { getClient } from 'lib/launchdarkly-server'

type Data = { featureFlag: boolean | 'defaultValue' }

const SSR: NextPage<Data> = props => {
  return (
    <div>
      <p>{JSON.stringify(props.featureFlag)}</p>
      <p>
        {props.featureFlag === 'defaultValue' && 'flag could not be loaded'}
      </p>
      <p>{`Flag ${props.featureFlag ? 'on' : 'off'}`}</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const client = await getClient()
  const featureFlag = await client.variation(
    'feature-flag',
    { key: 'anonymous' },
    'defaultValue'
  )

  return {
    props: {
      featureFlag
    }
  }
}

export default SSR
