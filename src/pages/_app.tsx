import { AppProps } from 'next/app'
import '../styles/global.css'
import { AuthContextProvider, useUserContext } from '@/context/context'
import React, { useEffect } from 'react'
import Head from 'next/head'
export default function App({ Component, pageProps }:AppProps) {
 
  
  return (
    
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Warehouse AI</title>
      </Head>
      <AuthContextProvider>
          <Component {...pageProps} />
      </AuthContextProvider>
    </React.Fragment>
  )

}    