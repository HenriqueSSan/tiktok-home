import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import Link from '../components/Link';
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

      <main className="mt-[20px]">
        <div>
          <div className="grid grid-cols-2">
            {userData.foryou.map(({ user, uuuid, channel }) => {
              return (
                <div key={uuuid}>
                  <div>
                    <header>
                      <figure>
                        <img
                          src={user.image.imageSrc}
                          alt={user.image.imageAlt}
                        />
                        <figcaption>
                          <h4 className="text-common-white">
                            {user.displayName}
                          </h4>
                          <p className="text-common-white-200">
                            {user.message}
                          </p>
                        </figcaption>
                      </figure>

                      <div>
                        <Link to={`/${user.followerUrl}`}>Seguir</Link>
                      </div>
                    </header>

                    <video controls>
                      <source src={channel.videos[0].url} />
                    </video>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
