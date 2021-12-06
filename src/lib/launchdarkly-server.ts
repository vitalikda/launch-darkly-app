import LaunchDarkly from 'launchdarkly-node-server-sdk'

let launchDarklyClient: LaunchDarkly.LDClient | undefined

async function initialize() {
  if (!process.env.LAUNCH_DARKLY_SDK_KEY) {
    throw new Error('LAUNCH_DARKLY_SDK_KEY is not defined')
  }
  const client = LaunchDarkly.init(process.env.LAUNCH_DARKLY_SDK_KEY)
  await client.waitForInitialization()
  return client
}

export async function getClient() {
  if (launchDarklyClient) return launchDarklyClient
  launchDarklyClient = await initialize()
  return launchDarklyClient
}
