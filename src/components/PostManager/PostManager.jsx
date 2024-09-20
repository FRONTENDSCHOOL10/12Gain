import S from './PostManager.module.css';
import { number, array } from 'prop-types';
import ProfileImage from '@/components/ProfileImage/ProfileImage';

PostManager.propTypes = {
  members: array,
  imageWidth: number,
  imageHeight: number,
};

function PostManager({ members, imageWidth, imageHeight }) {
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
