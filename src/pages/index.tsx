import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import ForyouVideo from '../components/ForyouVideo';
import { IUsersData } from '../layout/Sidebar/_Sidebar';

const Index = () => {
  const [userData, setUserData] = useState({} as IUsersData);

  useEffect(() => {
    async function fetchSuggentionAccounts() {
      const response = await fetch('/api/users');

      const getData = await response.json();

      setUserData(getData);
    }

    fetchSuggentionAccounts();
  }, []);

  if (!userData.suggestionAccounts) {
    return <></>;
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

        <title>Assista a vídeos populares para você | TikTok</title>
      </Head>

      <main className="py-[24px] mx-4 max-w-[692px] w-full">
        <div>
          <div className="grid">
            {userData.foryou.map(({ ...props }) => {
              return <ForyouVideo key={props.uuid} {...props} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
