import type { AppProps } from 'next/app'

import Providers from '@/app/providers/Providers'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App


