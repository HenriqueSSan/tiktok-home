import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import CommentIcon from '../assets/img/comment-icon.svg';
import HeartIcon from '../assets/img/heart-icon.svg';
import SharedIcon from '../assets/img/shared-icon.svg';
import Link from '../components/Ui/Link';
import { Paragraph } from '../components/Ui/Texts/Paragraph';
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
            {userData.foryou.map(({ user, uuid, channel }) => {
              return (
                <div
                  className="py-[20px] relative after:absolute after:bottom-0 after:block after:w-full after:h-[1px] after:bg-gray-100-opacity-12"
                  key={uuid}
                >
                  <div className="flex items-start">
                    <div className="flex items-center justify-between min-w-[56px] h-[56px]">
                      <Link to={`/${user.followerUrl}`}>
                        <figure className="flex items-center">
                          <Image
                            width={56}
                            height={56}
                            className="rounded-full"
                            src={user.image.src}
                            alt={user.image.alt}
                          />
                        </figure>
                      </Link>
                    </div>
                    <div className="ml-3 w-full mr-[114px]">
                      <div>
                        <div className="flex items-center justify-between">
                          <Link to={`/${user.followerUrl}`}>
                            <div className="flex items-center">
                              <h4 className="inline text-common-white font-secondary font-bold text-[1rem] leading-[22px] mr-2">
                                {user.displayName}
                              </h4>
                              <p className="inline text-common-white-200 text-gray-100-opacity-75 text-[12px] font-primary leading-[15px]">
                                {user.message}
                              </p>
                            </div>
                          </Link>

                          <Link
                            className="flex items-center justify-center absolute font-primary font-semibold top-[28px] min-w-[88px] right-0 px-[10px] text-primary-@100 bg-gray-100-opacity-12 border border-solid border-primary-@100 rounded-[6px]"
                            to={`/${user.followerUrl}`}
                          >
                            Seguir
                          </Link>
                        </div>
                        <div className="flex flex-wrap justify-start items-start mb-3">
                          {channel.videos[0].tags.map(
                            ({ uuid: _uuid, name, url }) => {
                              return (
                                <div key={_uuid}>
                                  <Link
                                    to={url}
                                    className="flex items-center rounded-full mr-2 leading-[18px] h-[24px] py-[3px]"
                                  >
                                    <Paragraph
                                      as="strong"
                                      className="text-sm text-common-white whitespace-nowrap font-primary overflow-hidden font-semibold"
                                    >
                                      #{name}
                                    </Paragraph>
                                  </Link>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex items-end">
                        <video
                          className="max-w-[283px] rounded-[10px] h-[calc(450px_+_(100vw_-_768px)_/_1152_*_100)] object-cover"
                          controls
                          src={channel.videos[0].url}
                        ></video>

                        <div className="ml-4">
                          <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100-opacity-08 mb-4 rounded-full">
                            <HeartIcon />
                          </div>
                          <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100-opacity-08 mb-4 rounded-full">
                            <CommentIcon />
                          </div>
                          <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100-opacity-08 rounded-full">
                            <SharedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
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
