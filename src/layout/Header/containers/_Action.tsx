import Link, { ILinkProps } from '../../../components/Ui/Link';
import EffectIcon from '../assets/img/created-effect-icon.svg?url';
import MessageIcon from '../assets/img/message-icon.svg';
import PlusIcon from '../assets/img/plus-icon.svg';
import SendIcon from '../assets/img/send-icon.svg';

type IActionLinkProps = ILinkProps;

export function ActionLink({ children, to = '/', ...props }: IActionLinkProps) {
  return (
    <Link {...props} to={to}>
      <span>{children}</span>
    </Link>
  );
}

export function $Actions() {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="flex items-center px-4 bg-gray-100-opacity-12 h-[36px] rounded-[2px] text-gray-100-opacity-90"
      >
        <PlusIcon width={20} height={20} className="mr-2" />
        <span>Carregar</span>
      </button>

      <ActionLink className="block ml-[23px] w-8 h-8 pr-[5px] pt-[5px]" to="/">
        <img width={22} height={22} src={EffectIcon} alt="" />
      </ActionLink>

      <ActionLink
        className="block ml-4 px-[3px] pt-[3px] h-[32px] w-[32px]"
        to="/"
      >
        <SendIcon className="w-[26px] h-[26px]" />
      </ActionLink>

      <ActionLink className="block ml-4 w-8 h-8" to="/">
        <MessageIcon className="w-8 h-8" />
      </ActionLink>

      <button
        type="button"
        className="block w-8 h-8 ml-4 text-common-white-200 bg-primary-@100 rounded-full"
      >
        H
      </button>
    </div>
  );
}
