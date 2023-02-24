import { ReactNode, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import FollowersDarkIcon from '../../assets/img/followers-dark-icon.svg';
import FollowersIcon from '../../assets/img/followers-icon.svg';
import HashTagIcon from '../../assets/img/hash-tag-icon.svg';
import HomeIcon from '../../assets/img/home-icon.svg';
import MusicTagIcon from '../../assets/img/music-tag-icon.svg';
import VerificatedAccountIcon from '../../assets/img/verificated-account-icon.svg';
import VideoDarkIcon from '../../assets/img/video-dark-icon.svg';
import VideoIcon from '../../assets/img/video-icon.svg';
import Link from '../../components/Link';
import { ISuggestionAccountUsers } from '../../pages/api/users';

interface IHighlightLinkProps {
  to: string;
  children: ReactNode | ReactNode[];
  icon: ReactNode | ReactNode[];
}

export const HighlightLink = ({ to, children, icon }: IHighlightLinkProps) => {
  const { pathname } = useRouter();

  function setHighlight(_to: string) {
    return pathname === _to ? 'text-primary' : 'dark:text-common-white';
  }

  return (
    <Link
      to={to}
      className={`${setHighlight(
        to
      )} flex items-center p-2 hover:bg-common-white-100 transition duration-300 ease`}
    >
      {icon}
      <h2
        className={`${setHighlight(
          to
        )} block ml-2 text-[1.15rem] leading-[25px] font-bold font-primary`}
      >
        {children}
      </h2>
    </Link>
  );
};

interface IUsersData {
  suggestion_accounts: ISuggestionAccountUsers[];
  suggestion_explorer_tags: [{ name: string; type: string; url: string }];
}

export const Sidebar = () => {
  const [userData, setUserData] = useState({} as IUsersData);

  const { pathname } = useRouter();

  useEffect(() => {
    async function fetchSuggentionAccounts() {
      const response = await fetch('/api/users');

      const getData = await response.json();

      setUserData(getData);
    }

    fetchSuggentionAccounts();
  }, [userData]);

  if (!userData.suggestion_accounts) {
    return <></>;
  }

  return (
    <aside className="">
      <div className="relative w-[356px]">
        <div className="sidebar__content max-h-[100vh] h-full fixed top-[60px] w-[356px] z-40 pt-3 overflow-y-auto overflow-x-hidden perspective-1 overscroll-y-contain">
          <div className="pl-3 pb-[20px] mb-[60px]">
            <nav className="pb-1 border-b border-common-white-100 border-solid">
              <ul>
                <li>
                  <HighlightLink
                    to="/"
                    icon={<HomeIcon width={32} height={32} />}
                  >
                    Para Você
                  </HighlightLink>
                </li>

                <li>
                  <HighlightLink
                    to="/followers"
                    icon={
                      pathname === '/followers' ? (
                        <FollowersDarkIcon width={32} height={32} />
                      ) : (
                        <FollowersIcon width={32} height={32} />
                      )
                    }
                  >
                    Seguindo
                  </HighlightLink>
                </li>

                <li>
                  <HighlightLink
                    to="/live"
                    icon={
                      pathname === '/live' ? (
                        <VideoDarkIcon width={32} height={32} />
                      ) : (
                        <VideoIcon width={32} height={32} />
                      )
                    }
                  >
                    LIVE
                  </HighlightLink>
                </li>
              </ul>
            </nav>

            <div>
              <p className="text-common-white-300 my-2 px-2 text-[14px] leading-[20px]">
                Contas sugeridas
              </p>

              <ul>
                {userData.suggestion_accounts.map((account, index) => {
                  if (index >= 5) {
                    return <></>;
                  }

                  return (
                    <li key={account.name}>
                      <div>
                        <Link
                          to="/users/:channel"
                          className="p-2 h-[50px] flex items-center justify-start"
                        >
                          <figure className="flex items-center">
                            <img
                              className="rounded-full"
                              src={account.user_image}
                              alt=""
                              width={32}
                              height={32}
                            />
                            <figcaption className="ml-2 flex items-start flex-col">
                              <div className="flex items-center">
                                <h4 className="text-common-white font-secondary font-bold text-[1rem] leading-[22px]">
                                  {account.name}
                                </h4>
                                {account.is_verificated && (
                                  <VerificatedAccountIcon
                                    className="ml-1"
                                    width={14}
                                    height={14}
                                  />
                                )}
                              </div>
                              <p className="text-common-white-200 text-[12px] font-primary leading-[15px]">
                                {account.message}
                              </p>
                            </figcaption>
                          </figure>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="text-common-white-300 my-2 px-2 text-[14px] leading-[20px]">
                Contas que você segue
              </p>

              <ul>
                {userData.suggestion_accounts.map((account, index) => {
                  if (index >= 7) {
                    return <></>;
                  }

                  return (
                    <li key={account.name}>
                      <div>
                        <Link
                          to="/users/:channel"
                          className="p-2 h-[50px] flex items-center justify-start"
                        >
                          <figure className="flex items-center">
                            <img
                              className="rounded-full"
                              src={account.user_image}
                              alt=""
                              width={32}
                              height={32}
                            />
                            <figcaption className="ml-2 flex items-start flex-col">
                              <div className="flex items-center">
                                <h4 className="text-common-white font-secondary font-bold text-[1rem] leading-[22px]">
                                  {account.name}
                                </h4>
                                {account.is_verificated && (
                                  <VerificatedAccountIcon
                                    className="ml-1"
                                    width={14}
                                    height={14}
                                  />
                                )}
                              </div>
                              <p className="text-common-white-200 text-[12px] font-primary leading-[15px]">
                                {account.message}
                              </p>
                            </figcaption>
                          </figure>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p>Descobrir</p>

              <ul className="flex flex-wrap justify-start items-start gap-3">
                {userData.suggestion_explorer_tags.map((tag) => {
                  return (
                    <li key={tag.name}>
                      <a
                        href="#"
                        className="flex items-center rounded-full bg-common-white-100 leading-[18px] h-[24px] mb-[12px] px-[10px] py-[3px]"
                      >
                        {tag.type === 'any' && (
                          <HashTagIcon width={16} height={16} />
                        )}
                        {tag.type === 'music' && (
                          <MusicTagIcon width={16} height={16} />
                        )}

                        <p className="pl-2 text-sm text-[#ffffffbf] whitespace-nowrap font-primary overflow-hidden">
                          {tag.name}
                        </p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
