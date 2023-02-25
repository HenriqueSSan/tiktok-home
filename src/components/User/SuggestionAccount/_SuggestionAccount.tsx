import { ISuggestionAccountProps } from './@types';
import VerificatedAccountIcon from './assets/img/verificated-account-icon.svg';
import { $Image } from './global/_Image';
import Link from '../../Link';
import { Paragraph } from '../../Ui/Texts/Paragraph';
import { Title } from '../../Ui/Texts/Titles';

export function SuggestionAccount({ user }: ISuggestionAccountProps) {
  const { displayName, isVerified, message, followerUrl, image } = user;

  return (
    <Link
      to={`/${followerUrl}`}
      className="p-2 h-[50px] flex items-center justify-start"
    >
      <figure className="flex items-center">
        <$Image src={image.src} alt={image.alt} />

        <figcaption className="ml-2 flex items-start flex-col max-[1280px]:hidden">
          <div className="flex items-center">
            <Title
              level={4}
              className="text-common-white font-secondary font-bold text-[1rem] leading-[22px]"
            >
              {displayName}
            </Title>

            {isVerified && (
              <VerificatedAccountIcon className="ml-1 w-[14px] h-[14px]" />
            )}
          </div>
          <Paragraph className="text-gray-100-opacity-75 text-[12px] font-primary leading-[15px]">
            {message}
          </Paragraph>
        </figcaption>
      </figure>
    </Link>
  );
}
