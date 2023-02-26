import { $Actions } from './containers/_Actions';
import { $Header } from './containers/_Header';
import { $UserImage } from './containers/_UserImage';
import { IForyouItemProps } from '../../utils/generationForyou';
import Tag from '../Tag';

type IForyouVideoProps = IForyouItemProps;

export function ForyouVideo({ user, channel }: IForyouVideoProps) {
  const { image, followerUrl, displayName, message } = user;
  const { videos } = channel;

  return (
    <div className="py-[20px] relative after:absolute after:bottom-0 after:block after:w-full after:h-[1px] after:bg-gray-100-opacity-12">
      <div className="flex items-start">
        <div className="flex items-center justify-between min-w-[56px] h-[56px]">
          <$UserImage followerUrl={followerUrl} image={image} />
        </div>
        <div className="ml-3 w-full mr-[114px]">
          <div>
            <$Header
              displayName={displayName}
              followerUrl={followerUrl}
              message={message}
            />

            <div className="flex flex-wrap justify-start items-start mb-3">
              {videos[0].tags.map(({ uuid: _uuid, ...props }) => {
                return <Tag key={_uuid} {...props} />;
              })}
            </div>
          </div>
          <div className="flex items-end">
            <video
              playsInline={true}
              preload="metadata"
              controls
              className="max-w-[283px] rounded-[10px] h-[calc(450px_+_(100vw_-_768px)_/_1152_*_100)] object-cover"
              src={`${videos[0].url}#t=0.8`}
            ></video>

            <$Actions />
          </div>
        </div>
      </div>
    </div>
  );
}
