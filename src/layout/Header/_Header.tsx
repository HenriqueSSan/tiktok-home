import EffectIcon from '../../assets/img/created-effect-icon.svg?url';
import LogoImg from '../../assets/img/logo.svg';
import MessageIcon from '../../assets/img/message-icon.svg';
import PlusIcon from '../../assets/img/plus-icon.svg';
import SearchIcon from '../../assets/img/search-icon.svg';
import SendIcon from '../../assets/img/send-icon.svg';
import Link from '../../components/Link';

export const Header = () => {
  return (
    <header className="fixed w-full top-0 right-0 border-b border-solid dark:bg-app-dark-window bg-app-light-window z-50 border-gray-100-opacity-12">
      <nav className="flex items-center justify-around h-[60px]">
        <div className="flex w-full items-center justify-between md:max-w-[1150px] pr-6 pl-5">
          <a href="">
            <LogoImg />
          </a>

          <form action="">
            <fieldset className="px-2">
              <div className="flex items-center">
                <div className="flex items-center py-3 px-4 bg-gray-100-opacity-12 rounded-full">
                  <input
                    type="text"
                    className="bg-transparent w-[292px] text-gray-100-opacity-90 placeholder:text-[#757575] outline-none"
                    placeholder="Pesquisar contas e vídeos"
                  />
                  <span className="block h-7 -my-[3px] bg-gray-100-opacity-12 w-[1px]"></span>
                  <button
                    type="button"
                    className="pr-3 pl-4 -my-3 -mx-4 -ml-0 py-[11px] rounded-r-full"
                  >
                    <SearchIcon width={24} height={24} />
                  </button>
                </div>
              </div>
            </fieldset>
          </form>

          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center px-4 bg-gray-100-opacity-12 h-[36px] rounded-[2px] text-gray-100-opacity-90"
            >
              <PlusIcon width={20} height={20} className="mr-2" />
              <span>Carregar</span>
            </button>

            <Link className="block ml-[23px] w-8 h-8 pr-[5px] pt-[5px]" to="/">
              <span>
                <img width={22} height={22} src={EffectIcon} alt="" />
              </span>
            </Link>

            <Link
              className="block ml-4 px-[3px] pt-[3px] h-[32px] w-[32px]"
              to="/"
            >
              <span>
                <SendIcon className="w-[26px] h-[26px]" />
              </span>
            </Link>

            <Link className="block ml-4 w-8 h-8" to="/">
              <span>
                <MessageIcon className="w-8 h-8" />
              </span>
            </Link>

            <button
              type="button"
              className="block w-8 h-8 ml-4 text-common-white-200"
            >
              OK
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

/* header>div>nav>a>img^div>form>div>input+button^^div>button>img+span^a>img^button>img^button>img */
