import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from '../components/Toast'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <div>
        <Head>
          <title>MoodB.</title>
        </Head>
       <ToastContainer />
       <Component {...pageProps} />
     </div>
  )
}

export default MyApp
