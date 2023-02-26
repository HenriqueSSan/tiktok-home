// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

import { generationImage } from './generationImage';

function toLowerAndNotSpace(string: string) {
  return string.toLowerCase().replaceAll(' ', '');
}

export interface ISuggestionAccount {
  uuuid: string | number;

  user: {
    displayName: string;
    isVerified: boolean;
    followerUrl: string;
    message: string | undefined;
    image: {
      src: string;
      alt: string;
    };
  };

  informations: {
    followers: string;
    likes: string;
  };
}

export function generationSuggestionAccount(): ISuggestionAccount {
  const { datatype, name, random, internet } = faker;

  const { boolean, uuid } = datatype;
  const { numeric, words } = random;
  const { emoji } = internet;

  const displayName = toLowerAndNotSpace(name.fullName());

  const messageString = boolean() ? words(4) : undefined;
  const messageWithEmoji = messageString + emoji();
  const message =
    boolean() && !!messageString ? messageWithEmoji : messageString;

  return {
    uuuid: uuid(),
    user: {
      displayName,
      isVerified: boolean(),
      message,
      image: generationImage(),
      followerUrl: `@${displayName}`,
    },

    informations: {
      followers: numeric(10).toString(),
      likes: numeric(10).toString(),
    },
  };
}
