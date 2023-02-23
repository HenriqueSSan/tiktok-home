import React, { useEffect } from 'react';

import { AppProps } from 'next/app';

import Header from '../layout/Header';

import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-mode', 'dark');
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
