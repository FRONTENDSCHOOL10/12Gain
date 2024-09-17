import S from './PostManager.module.css';
import { string, number } from 'prop-types';
import ProfileImage from '@/components/ProfileImage/ProfileImage';

PostManager.propTypes = {
  nickName: string.isRequired,
  pop: number,
  imageWidth: number,
  imageHeight: number,
};

function PostManager({ nickName, pop, imageWidth, imageHeight }) {
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
