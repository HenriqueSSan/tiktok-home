export interface ISuggestionAccountProps {
  user: {
    displayName: string;
    message: string | undefined;
    isVerified: string | boolean | '';
    followerUrl: string;
    image: {
      src: string;
      alt: string;
    };
  };
}
