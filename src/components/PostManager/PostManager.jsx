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

function PostManager({ members, imageWidth, imageHeight }) {
  return (
    <div className={S.component}>
      {members.map((member, index) => (
        <div key={index} className={S.profile__container}>
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
