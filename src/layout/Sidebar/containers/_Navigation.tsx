import { HighlightRouterLink } from './__HighlightRouterLink';
import FollowersDarkIcon from '../assets/img/followers-dark-icon.svg';
import FollowersIcon from '../assets/img/followers-icon.svg';
import HomeIcon from '../assets/img/home-icon.svg';
import VideoDarkIcon from '../assets/img/video-dark-icon.svg';
import VideoIcon from '../assets/img/video-icon.svg';

interface INavigationProps {
  pathname: string;
}

export function $Navigation({ pathname }: INavigationProps) {
  return (
    <nav className="pb-1">
      <ul>
        <li>
          <HighlightRouterLink
            to="/"
            icon={<HomeIcon width={32} height={32} />}
          >
            Para Você
          </HighlightRouterLink>
        </li>

        <li>
          <HighlightRouterLink
            to="/followers"
            icon={
              pathname === '/followers' ? (
                <FollowersDarkIcon width={32} height={32} />
              ) : (
                <FollowersIcon width={32} height={32} />
              )
            }
          >
            Seguindo
          </HighlightRouterLink>
        </li>

        <li>
          <HighlightRouterLink
            to="/live"
            icon={
              pathname === '/live' ? (
                <VideoDarkIcon width={32} height={32} />
              ) : (
                <VideoIcon width={32} height={32} />
              )
            }
          >
            LIVE
          </HighlightRouterLink>
        </li>
      </ul>
    </nav>
  );
}
