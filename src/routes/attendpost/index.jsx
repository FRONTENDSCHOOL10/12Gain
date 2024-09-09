import S from '@/routes/attendpost/style.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { string, number } from 'prop-types';
import DetailItem from '@/components/DetailItem/DetailItem';
import PostManager from '@/components/PostManager/PostManager';
import Header from '@/components/Header/Header';

AttendPost.propTypes = {
  title: string,
  sportType: string,
  location: string,
  datetime: string,
  pop: number,
  description: string,
  member: number,
};

function AttendPost({
  title,
  sportType,
  location,
  datetime,
  pop,
  description,
  member = 1,
}) {
  const { postId } = useParams();
  const navigate = useNavigate();

  return (
    <article className={S.component}>
      <Header iconList={['left', 'home', 'more']} />

      <div className={S.main}>
        <p className={S.main_title}>{title}</p>
        <div className={S.main_detail}>
          <DetailItem label="종목" value={sportType} />
          <DetailItem label="장소" value={location} />
          <DetailItem label="일시" value={datetime} />
          <DetailItem label="인원" value={pop} />
        </div>
      </div>

      <div className={S.sub}>
        <p className={S.sub_title}>내용</p>
        <div className={S.sub_description}>{description}</div>
      </div>

      <div className={S.attend}>
        <div className={S.attend_member}>
          <span className={S.attend_member_pop}>
            참여멤버 {pop}명
            <span className={S.attend_member_pop_max}> / 4명 </span>{' '}
          </span>
          <div className={S.attend_member_info}>
            <PostManager
              nickName="사용자"
              pop={pop}
              imageWidth={44}
              imageHeight={44}
            />
          </div>
        </div>
      </div>

      <div className={S.attend_button}>
        <Button
          text="채팅하기"
          height="2.8rem"
          onClick={() => navigate('../chat')} //TODO: chatting
        />
      </div>
    </article>
  );
}

export default AttendPost;
