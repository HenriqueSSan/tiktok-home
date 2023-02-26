import React from 'react';

import SuggestionAccount from '../../../components/User/SuggestionAccount';
import { ISuggestionAccount } from '../../../utils/generationAccounts';
import { ParagraphList } from '../global/_ParagraphList';

interface ISuggestionAccountUsersListProps {
  suggestionAccounts: ISuggestionAccount[];
}

export function $SuggestionUsersList({
  suggestionAccounts,
}: ISuggestionAccountUsersListProps) {
  return (
    <div className="relative py-4 before:absolute before:top-0 before:block before:w-full before:h-[1px] before:bg-gray-100-opacity-12">
      <ParagraphList>Contas sugeridas</ParagraphList>

      <ul>
        {suggestionAccounts.map(
          ({ uuuid, user }: ISuggestionAccount, index: number) => {
            if (index >= 5) {
              return null;
            }

            return (
              <li key={`${uuuid}-dss`}>
                <SuggestionAccount user={user} />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
