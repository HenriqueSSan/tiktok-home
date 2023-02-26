import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { $Explorer } from './containers/_Explorer';
import { $Navigation } from './containers/_Navigation';
import { $SuggestionUsersList } from './containers/_SuggestionUsers';
import { $AccountsUserFollowList } from './containers/_UserFollow';
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

            <$Explorer suggestionTags={userData.suggestionExplorerTags} />
          </div>
        </div>
      </div>
    </aside>
  );
};
