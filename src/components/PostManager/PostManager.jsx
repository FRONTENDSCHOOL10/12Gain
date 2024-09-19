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
      {members &&
        members.map((member, index) => (
          <div className={S.user__container} key={index}>
            <ProfileImage
              url="/profile.png"
              width={imageWidth}
              height={imageHeight}
            />
            <span>{member.nickname}</span>
          </div>
        ))}
    </div>
  );
}
export default PostManager;
