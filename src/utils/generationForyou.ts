// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

import { generationImage } from './generationImage';
import { generationTag, ITagItemProps } from './generationTags';

interface IGenerationForyouProps {
  videoUrl: string;
}

export interface IForyouItemProps {
  uuid: string;
  user: {
    displayName: string;
    message: string | undefined;
    followerUrl: string;
    image: {
      src: string;
      alt: string;
    };
  };

  channel: {
    videos: [
      {
        uuid: string;
        url: string;
        likes: string;
        shared: string;
        comments: string;
        tags: ITagItemProps[];
      }
    ];
  };
}

export function generationForyou({
  videoUrl,
}: IGenerationForyouProps): IForyouItemProps {
  const { datatype, name, random } = faker;

  const displayName = name.fullName().toLowerCase().replaceAll(' ', '');

  const message = datatype.boolean() ? random.words(4) : undefined;

  return {
    uuid: datatype.uuid(),
    user: {
      displayName,
      followerUrl: `@${displayName}`,
      message,
      image: generationImage(),
    },

    channel: {
      videos: [
        {
          uuid: datatype.uuid(),
          url: videoUrl,
          likes: '',
          shared: '',
          comments: '',
          tags: [
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
            generationTag(),
          ],
        },
      ],
    },
  };
}
