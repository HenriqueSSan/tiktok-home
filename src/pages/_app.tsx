import React, { useEffect } from 'react';

import { AppProps } from 'next/app';

import '../styles/index.css';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-mode', 'dark');
  }, []);

  return (
    <>
      <Header />
      <div className="window-content w-full mx-auto flex md:max-w-[1194px] items-center justify-between pr-6 pl-5">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
