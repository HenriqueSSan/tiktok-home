import { NextApiResponse, NextApiRequest } from 'next';

export interface ISuggestionAccountUsers {
  name: string;
  is_verificated: boolean;
  user_image: any;
  message: string | undefined;
  informations: {
    followers: string;
    likes: string;
  };
}

const suggestionAccountsUsers: ISuggestionAccountUsers[] = [
  {
    name: 'virginiafonseca',
    is_verificated: true,
    user_image:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/767b7e15b86e0cafd5ad212c4043d6e4~c5_100x100.jpeg?x-expires=1677402000&x-signature=2UdRxzfF6NBji2IpWcCOEGYapS4%3D',
    message: 'Virginia',
    informations: {
      followers: '36M',
      likes: '921.1M',
    },
  },

  {
    name: 'user - 2',
    is_verificated: true,
    user_image:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/767b7e15b86e0cafd5ad212c4043d6e4~c5_100x100.jpeg?x-expires=1677402000&x-signature=2UdRxzfF6NBji2IpWcCOEGYapS4%3D',
    message: 'Virginia',
    informations: {
      followers: '36M',
      likes: '921.1M',
    },
  },

  {
    name: 'user - 3',
    is_verificated: true,
    user_image:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/767b7e15b86e0cafd5ad212c4043d6e4~c5_100x100.jpeg?x-expires=1677402000&x-signature=2UdRxzfF6NBji2IpWcCOEGYapS4%3D',
    message: 'Virginia',
    informations: {
      followers: '36M',
      likes: '921.1M',
    },
  },

  {
    name: 'user - 4',
    is_verificated: true,
    user_image:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/767b7e15b86e0cafd5ad212c4043d6e4~c5_100x100.jpeg?x-expires=1677402000&x-signature=2UdRxzfF6NBji2IpWcCOEGYapS4%3D',
    message: 'Virginia',
    informations: {
      followers: '36M',
      likes: '921.1M',
    },
  },

  {
    name: 'user - 5',
    is_verificated: true,
    user_image:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/767b7e15b86e0cafd5ad212c4043d6e4~c5_100x100.jpeg?x-expires=1677402000&x-signature=2UdRxzfF6NBji2IpWcCOEGYapS4%3D',
    message: 'Virginia',
    informations: {
      followers: '36M',
      likes: '921.1M',
    },
  },

  {
    name: 'user - 6',
    is_verificated: true,
    user_image:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/767b7e15b86e0cafd5ad212c4043d6e4~c5_100x100.jpeg?x-expires=1677402000&x-signature=2UdRxzfF6NBji2IpWcCOEGYapS4%3D',
    message: 'Virginia',
    informations: {
      followers: '36M',
      likes: '921.1M',
    },
  },

  {
    name: 'user - 7',
    is_verificated: true,
    user_image:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/767b7e15b86e0cafd5ad212c4043d6e4~c5_100x100.jpeg?x-expires=1677402000&x-signature=2UdRxzfF6NBji2IpWcCOEGYapS4%3D',
    message: 'Virginia',
    informations: {
      followers: '36M',
      likes: '921.1M',
    },
  },
];

const suggestionExplorerTags = [
  {
    name: 'carnavaltiktok',
    type: 'any',
    url: '/tag/:name',
  },

  {
    name: 'carnavalagitatiktok',
    type: 'any',
    url: '/tag/:name',
  },

  {
    name: 'arcane',
    type: 'music',
    url: '/tag/:name',
  },

  {
    name: 'tag - 1',
    type: 'any',
    url: '/tag/:name',
  },

  {
    name: 'tag - 2',
    type: 'any',
    url: '/tag/:name',
  },

  {
    name: 'tag - 3',
    type: 'any',
    url: '/tag/:name',
  },
];

export default function getSuggestedAccounts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    name: 'Henrique',
    suggestion_accounts: suggestionAccountsUsers,
    suggestion_explorer_tags: suggestionExplorerTags,
  });
}
