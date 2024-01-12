import { AppProps } from 'next/app'
import '../styles/global.css'
import { AuthContextProvider, useUserContext } from '@/context/context'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Loader from '@/components/Loader/Loader'
import { getCookie } from 'cookies-next'
export default function App({ Component, pageProps }:AppProps) {
 

  
  
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
        setLoading(false)
    }
    });
  
  
  if (isLoading) {
      return <Loader/>
  }
  else 
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