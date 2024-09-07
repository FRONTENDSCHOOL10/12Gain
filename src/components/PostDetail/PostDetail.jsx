import S from '@/components/PostDetail/style.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { string, number } from 'prop-types';
import Header from '@/routes/home/component/Header';
import AttendPost from '@/routes/home/component/AttendPost';
import DetailItem from '@/components/DetailItem/DetailItem';

PostDetail.propTypes = {
  title: string,
  sportType: string,
  location: string,
  datetime: string,
  pop: number,
  description: string,
  member: number,
};

function PostDetail({
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
      <img className={S.img_main} src="/running.png" alt="이미지없음" />

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
            <AttendPost
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
          text="참여하기"
          height="2.8rem"
          onClick={() => navigate('join')}
        />
      </div>
    </article>
  );
}

export default PostDetail;
