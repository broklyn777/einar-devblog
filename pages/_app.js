// import { MDXProvider } from '@mdx-js/react'
import '../styles/globals.css'
// import Nav from '../components/Nav'
import Head from 'next/head'
// import Layout from '@/components/Layout'
import LayoutWrapper from '@/components/LayoutWrapper'

function MyApp({ Component, pageProps }) {
  return (

    <><Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>

    </>

  )
}

export default MyApp





