import React from 'react';

import { AppProps } from 'next/app';

import Header from '../layout/Header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp;
