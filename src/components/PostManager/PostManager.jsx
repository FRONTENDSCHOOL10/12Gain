import S from './PostManager.module.css';
import { number, array } from 'prop-types';
import ProfileImage from '@/components/ProfileImage/ProfileImage';
import { string } from 'prop-types';

PostManager.propTypes = {
  members: array,
  imageWidth: number,
  imageHeight: number,
  nickName: string,
};

function PostManager({ imageWidth, imageHeight, nickName }) {
  return (
    <div className={S.component}>
      <ProfileImage
        url="/profile.png"
        width={imageWidth}
        height={imageHeight}
      />
      <span>{nickName}</span>
    </div>
  );
}
export default PostManager;
