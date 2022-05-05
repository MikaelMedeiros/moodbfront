import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from '../components/Toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <div>
       <ToastContainer />
       <Component {...pageProps} />
     </div>
  )
}

export default MyApp
