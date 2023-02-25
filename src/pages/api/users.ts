// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { NextApiResponse, NextApiRequest } from 'next';

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

function generationSuggestionAccount(): ISuggestionAccount {
  const displayName = faker.name.fullName().toLowerCase().replaceAll(' ', '');
  const isVerified = faker.datatype.boolean();
  const message = faker.datatype.boolean() ? faker.random.words(4) : undefined;
  const uuuid = faker.datatype.uuid();
  const imageSrc = faker.image.imageUrl(100, 100, undefined, true);
  const imageAlt = faker.random.words(2);

  const messageEmoji = message + faker.internet.emoji();

  const followers = faker.random.numeric(10).toString();
  const likes = faker.random.numeric(10).toString();
  const followerUrl = `@${displayName}`;

  const suggestion: ISuggestionAccount = {
    uuuid,
    user: {
      displayName,
      followerUrl,
      isVerified,
      message: faker.datatype.boolean() && !!message ? messageEmoji : message,

      image: {
        src: imageSrc,
        alt: imageAlt,
      },
    },

    informations: {
      followers,
      likes,
    },
  };

  return suggestion;
}

const suggestionAccounts: ISuggestionAccount[] = [
  generationSuggestionAccount(),
  generationSuggestionAccount(),
  generationSuggestionAccount(),
  generationSuggestionAccount(),
  generationSuggestionAccount(),
  generationSuggestionAccount(),
  generationSuggestionAccount(),
  generationSuggestionAccount(),
];

export interface ITagItemProps {
  uuuid: string;
  name: string;
  type: 'music' | 'any';
  url: string;
}

function generationTag(): ITagItemProps {
  const name = faker.lorem.slug(1);
  const type = faker.datatype.boolean() ? 'music' : 'any';
  const uuuid = faker.datatype.uuid();

  const tag: ITagItemProps = {
    uuuid,
    name,
    type,
    url: `/tag/${name}`,
  };

  return tag;
}

const suggestionExplorerTags = [
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
];

export interface IForyouItemProps {
  uuuid: string;
  user: {
    displayName: string;
    message: string | undefined;
    followerUrl: string;
    image: {
      imageSrc: string;
      imageAlt: string;
    };
  };

  channel: {
    videos: [
      {
        uuuid: string;
        url: string;
        likes: string;
        shared: string;
        comments: string;
        tags: ITagItemProps[];
      }
    ];
  };
}

function generationForyou({
  videoUrl,
}: {
  videoUrl: string;
}): IForyouItemProps {
  const displayName = faker.name.fullName().toLowerCase().replaceAll(' ', '');
  const message = faker.datatype.boolean() ? faker.random.words(4) : undefined;

  const imageSrc = faker.image.imageUrl(100, 100, undefined, true);
  const imageAlt = faker.random.words(2);

  const followerUrl = `@${displayName}`;

  const foryou: IForyouItemProps = {
    uuuid: faker.datatype.uuid(),
    user: {
      displayName,
      followerUrl,
      message,
      image: {
        imageSrc,
        imageAlt,
      },
    },

    channel: {
      videos: [
        {
          uuuid: faker.datatype.uuid(),
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

  return foryou;
}
const foryou: IForyouItemProps[] = [
  generationForyou({
    videoUrl:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  }),

  generationForyou({
    videoUrl:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  }),

  generationForyou({
    videoUrl:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  }),

  generationForyou({
    videoUrl:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  }),

  generationForyou({
    videoUrl:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  }),

  generationForyou({
    videoUrl:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  }),
];

export default function getSuggestedAccounts(
  _: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({
    suggestionAccounts,
    suggestionExplorerTags,
    foryou,
  });
}
