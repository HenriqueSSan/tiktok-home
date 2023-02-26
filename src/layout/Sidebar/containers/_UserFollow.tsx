import SuggestionAccount from '../../../components/SuggestionAccount';
import { Paragraph } from '../../../components/Ui/Texts/Paragraph';
import { ISuggestionAccount } from '../../../utils/generationAccounts';

interface IAccountsUserFollowListProps {
  accountsUserFollow: ISuggestionAccount[];
}

export function $AccountsUserFollowList({
  accountsUserFollow,
}: IAccountsUserFollowListProps) {
  return (
    <div className="relative py-4 before:absolute before:top-0 before:block before:w-full before:h-[1px] before:bg-gray-100-opacity-12">
      <Paragraph className="text-gray-100-opacity-75 mb-2 px-2 text-[14px] leading-[20px] max-[1280px]:hidden">
        Contas que você segue
      </Paragraph>

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
