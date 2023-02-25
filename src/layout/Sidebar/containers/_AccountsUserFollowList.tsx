import React from 'react';

import SuggestionAccount from '../../../components/User/SuggestionAccount';
import { ISuggestionAccount } from '../../../pages/api/users';
import { ParagraphList } from '../global/_ParagraphList';

interface IAccountsUserFollowListProps {
  accountsUserFollow: ISuggestionAccount[];
}

export function $AccountsUserFollowList({
  accountsUserFollow,
}: IAccountsUserFollowListProps) {
  return (
    <div className="relative py-4 before:absolute before:top-0 before:block before:w-full before:h-[1px] before:bg-gray-100-opacity-12">
      <ParagraphList>Contas que você segue</ParagraphList>

      <ul>
        {accountsUserFollow.map(
          // eslint-disable-next-line prettier/prettier
          ({ uuuid, user }: ISuggestionAccount,index: number) => {
            if (index >= 7) {
              return null;
            }

            return (
              <li key={`${uuuid}-dsd`}>
                <SuggestionAccount user={user} />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
