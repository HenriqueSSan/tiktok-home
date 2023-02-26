// eslint-disable-next-line import/no-extraneous-dependencies
import { NextApiResponse, NextApiRequest } from 'next';

import {
  ISuggestionAccount,
  generationSuggestionAccount,
} from '../../utils/generationAccounts';
import {
  generationForyou,
  IForyouItemProps,
} from '../../utils/generationForyou';
import { generationTag } from '../../utils/generationTags';

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
