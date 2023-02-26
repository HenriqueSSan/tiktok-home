import Image from 'next/image';

import Link from '../../Ui/Link';

interface IUserImageProps {
  followerUrl: string;
  image: {
    src: string;
    alt: string;
  };
}

export function $UserImage({ followerUrl, image }: IUserImageProps) {
  return (
    <Link to={`/${followerUrl}`}>
      <figure className="flex items-center">
        <Image
          width={56}
          height={56}
          className="rounded-full"
          src={image.src}
          alt={image.alt}
        />
      </figure>
    </Link>
  );
}
