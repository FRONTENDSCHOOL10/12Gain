import ProfileImage from '@/components/ProfileImage/ProfileImage';
import S from '@/routes/community/component/AddCommentProfile.module.css';
import TimeAgo from '@/routes/community/component/TimeAgo';
import { string } from 'prop-types';

function AddCommentProfile({ nickName }) {
  return (
    <div className={S.component}>
      <ProfileImage url="/profile.png" width={44} height={44} />
      <div className={S.AddCommentProfile}>
        <div className={S.AddCommentProfile__nickName}>
          <h3>{nickName}</h3>
          <TimeAgo time="2" className={S.TimeAgo} />
        </div>
        <p>
          댓글을 작성 시 타인을 존중하는 언어를 사용해 주세요. 비방이나 욕설은
          삼가해 주시기 바랍니다. 모든 사용자는 커뮤니티 가이드를 준수해 주세요.
          위반 시 경고 없이 게시물이 삭제될 수 있습니다. 문의사항이 있으면
          언제든지 고객센터로 연락해 주세요. 빠른 시일 내에 답변드리겠습니다.
        </p>
      </div>
    </div>
  );
}

AddCommentProfile.propTypes = {
  nickName: string,
};

export default AddCommentProfile;
