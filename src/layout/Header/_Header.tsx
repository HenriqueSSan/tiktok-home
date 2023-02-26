import { $Actions } from './containers/_Action';
import { $Search } from './containers/_Search';
import LogoImg from '../../assets/img/logo.svg';
import Link from '../../components/Ui/Link';

export const Header = () => {
  return (
    <header className="fixed w-full top-0 right-0 border-b border-solid dark:bg-app-dark-window bg-app-light-window z-50 border-gray-100-opacity-12">
      <nav className="flex items-center justify-around h-[60px]">
        <div className="flex w-full items-center justify-between md:max-w-[1150px] pr-6 pl-5">
          <Link to="/">
            <LogoImg />
          </Link>

          <$Search />

          <$Actions />
        </div>
      </nav>
    </header>
  );
};
