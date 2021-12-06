import type { AppProps } from 'next/app'
import { withLDProvider } from 'launchdarkly-react-client-sdk'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

/**
 * React SDK reference:
 * https://docs.launchdarkly.com/sdk/client-side/react/react-web
 */
export default withLDProvider<AppProps>({
  // fallback to prod client side id
  clientSideID: process.env.LAUNCHDARKLY_CLIENT_SIDE_ID!,
  // User configuration: https://docs.launchdarkly.com/sdk/features/user-config
  user: {
    anonymous: true
  },
  // Configuration: https://docs.launchdarkly.com/sdk/features/config
  options: {
    bootstrap: 'localStorage'
  }
})(MyApp)
