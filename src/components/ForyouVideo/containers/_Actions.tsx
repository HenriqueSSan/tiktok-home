import CommentIcon from '../assets/img/comment-icon.svg';
import HeartIcon from '../assets/img/heart-icon.svg';
import SharedIcon from '../assets/img/shared-icon.svg';

export function $Actions() {
  return (
    <div className="ml-4">
      <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100-opacity-08 mb-4 rounded-full">
        <HeartIcon />
      </div>
      <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100-opacity-08 mb-4 rounded-full">
        <CommentIcon />
      </div>
      <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100-opacity-08 rounded-full">
        <SharedIcon />
      </div>
    </div>
  );
}
