import { ReactNode } from 'react';

import { useRouter } from 'next/router';

import Link from '../../../components/Ui/Link';
import { Title } from '../../../components/Ui/Texts/Titles';

interface IHighlightLinkProps {
  to: string;
  children: ReactNode | ReactNode[];
  icon: ReactNode | ReactNode[];
}

export const HighlightRouterLink = ({
  to,
  children,
  icon,
}: IHighlightLinkProps) => {
  const { pathname } = useRouter();

  function setHighlight(_to: string) {
    return pathname === _to ? 'text-primary-@100' : 'dark:text-common-white';
  }

  return (
    <Link
      to={to}
      className={`${setHighlight(
        to
      )} flex items-center p-2 hover:bg-common-white-100 transition duration-300 ease`}
    >
      {icon}
      <Title
        level={2}
        className={`${setHighlight(
          to
        )} block ml-2 text-[1.15rem] leading-[25px] font-bold font-primary max-[1280px]:hidden`}
      >
        {children}
      </Title>
    </Link>
  );
};
