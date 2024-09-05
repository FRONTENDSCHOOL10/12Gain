import ProfileImage from '@/components/ProfileImage/ProfileImage';
import S from '@/routes/community/component/FeedProfile.module.css';
import TimeAgo from '@/routes/community/component/TimeAgo';
import { string } from 'prop-types';

function FeedProfile({ nickName }) {
  return (
    <div className={S.component}>
      <ProfileImage url="/profile.png" width={30} height={30} />
      <div className={S.nickName}>
        <h2>{nickName}</h2>
        <TimeAgo time="2" className={S.TimeAgo} />
      </div>
    </div>
  );
}

FeedProfile.propTypes = {
  nickName: string,
};

export default FeedProfile;
