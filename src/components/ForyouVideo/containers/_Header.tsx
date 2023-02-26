import Link from '../../Ui/Link';

interface IHeaderProps {
  followerUrl: string;
  displayName: string;
  message: string | undefined;
}

export function $Header({ followerUrl, displayName, message }: IHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <Link to={`/${followerUrl}`}>
        <div className="flex items-center">
          <h4 className="inline text-common-white font-secondary font-bold text-[1rem] leading-[22px] mr-2">
            {displayName}
          </h4>
          <p className="inline text-common-white-200 text-gray-100-opacity-75 text-[12px] font-primary leading-[15px]">
            {message}
          </p>
        </div>
      </Link>

      <Link
        className="flex items-center justify-center absolute font-primary font-semibold top-[28px] min-w-[88px] right-0 px-[10px] text-primary-@100 bg-gray-100-opacity-12 border border-solid border-primary-@100 rounded-[6px]"
        to={`/${followerUrl}`}
      >
        Seguir
      </Link>
    </div>
  );
}
