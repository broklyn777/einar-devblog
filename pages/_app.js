// import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
// import Nav from '../components/Nav'
import Head from 'next/head'
// import Layout from '@/components/Layout'
import LayoutWrapper from '@/components/LayoutWrapper'

function MyApp({ Component, pageProps }) {
  return (

    <>
      <ThemeProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>

        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>

  )
}

export default MyApp





