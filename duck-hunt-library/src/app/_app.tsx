import type { AppProps } from 'next/app'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
import './global.css'
import { ApolloWrapper } from '../lib/apollo-wrapper'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloWrapper>
      <Component {...pageProps} />
    </ApolloWrapper>
  )
}