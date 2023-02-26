import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { $AccountsUserFollowList } from './containers/_AccountsUserFollowList';
import { $Navigation } from './containers/_Navigation';
import { $SuggestionUsersList } from './containers/_SuggestionUsersList';
import HashTagIcon from '../../assets/img/hash-tag-icon.svg';
import MusicTagIcon from '../../assets/img/music-tag-icon.svg';
import Link from '../../components/Ui/Link';
import { Paragraph } from '../../components/Ui/Texts/Paragraph';
import { ISuggestionAccount } from '../../utils/generationAccounts';
import { IForyouItemProps } from '../../utils/generationForyou';
import { ITagItemProps } from '../../utils/generationTags';

export interface IUsersData {
  suggestionAccounts: ISuggestionAccount[];
  suggestionExplorerTags: ITagItemProps[];
  foryou: IForyouItemProps[];
}

export const Sidebar = () => {
  const [userData, setUserData] = useState({} as IUsersData);

  const { pathname } = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch('/api/users');

      const data = await response.json();

      setUserData(data);
    }

    fetchUserData();
  }, []);

  if (!userData.suggestionAccounts) {
    return <></>;
  }

  return (
    <aside className="">
      <div className="relative w-[356px] max-[1280px]:w-[72px]">
        <div className="sidebar__content max-h-[100vh] max-[1280px]:w-[72px] h-full fixed top-[60px] w-[356px] z-40 pt-3 overflow-y-auto overflow-x-hidden perspective-1 overscroll-y-contain">
          <div className="pl-3 pb-[20px] mb-[60px] max-[1280px]:px-2">
            <$Navigation pathname={pathname} />

            <$SuggestionUsersList
              suggestionAccounts={userData.suggestionAccounts}
            />

            <$AccountsUserFollowList
              accountsUserFollow={userData.suggestionAccounts}
            />

            <div className="relative pt-4 px-2 pb-2 before:absolute before:top-0 before:block before:w-full before:h-[1px] before:bg-gray-100-opacity-12 max-[1280px]:hidden">
              <Paragraph className="text-gray-100-opacity-75 text-[14px] pb-4 leading-[20px]">
                Descobrir
              </Paragraph>

              <ul className="flex flex-wrap justify-start items-start">
                {userData.suggestionExplorerTags.map(
                  ({ uuid, name, type, url }) => {
                    return (
                      <li key={uuid}>
                        <Link
                          to={url}
                          className="flex items-center rounded-full mr-2 bg-gray-100-opacity-08 leading-[18px] h-[24px] mb-[12px] px-[10px] py-[3px]"
                        >
                          {type === 'any' && (
                            <HashTagIcon width={16} height={16} />
                          )}
                          {type === 'music' && (
                            <MusicTagIcon width={16} height={16} />
                          )}

                          <Paragraph className="pl-2 text-sm text-[#ffffffbf] whitespace-nowrap font-primary overflow-hidden">
                            {name}
                          </Paragraph>
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
