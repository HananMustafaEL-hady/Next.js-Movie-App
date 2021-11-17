import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import { SWRConfig } from 'swr'
import fetcher from '../swrFunctions/fetcher';
import onError from '../swrFunctions/onError';
import React from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  //shouldRetryOnError: false
  return <SWRConfig value={{ fetcher }}>

    <Component {...pageProps} />

  </SWRConfig>

}

export default MyApp
