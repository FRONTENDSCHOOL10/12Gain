import S from '@/components/PostDetail/style.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { string, number } from 'prop-types';
import DetailItem from '@/components/DetailItem/DetailItem';
import PostManager from '@/components/PostManager/PostManager';
import Header from '../Header/Header';
import HeaderForDetails from '../HeaderForDetails/HeaderForDetails';

PostDetail.propTypes = {
  title: string,
  sportType: string,
  location: string,
  datetime: string,
  pop: number,
  description: string,
  member: number,
};

/**
 * 제목, 종목, 위치, 일시, 인원, 설명, 참여인원
 * 이 데이터들이 필요한데 우선 propTypes로 가져오는 건 써놨는데
 * 어떤 식으로 가져와야할지를 모르겠다.
 *
 * /Users/hyoungsiyoung/final-project/12Gain/src/routes/router.jsx
 * 위 경로에서 라우터를 써서 MainPost.jsx에서 클릭 시, 해당 id 값으로 이동
 * 현재는 데이터 하드코딩으로 우선 작업
 * 포켓베이스 통해서 값 넣어주는 방식으로 변경 필요
 */

const testData = {
  title: '제목입니다',
  sportType: '러닝',
  location: '종합운동장',
  datetime: '2024년 9월 1일',
  pop: 1,
  description: '설명입니다.',
};

function PostDetail() {
  const navigate = useNavigate();

  // 여기에 postId를 이용해 백엔드에서 데이터를 가져오거나,
  // 상태를 통해 데이터를 전달할 수 있습니다.

  const { title, sportType, location, datetime, pop, description } = testData;

  return (
    <article className={S.component}>
      {/* <Header iconList={['left', 'home', 'more']} /> */}
      <HeaderForDetails
        leftIcon={[
          { iconId: 'left', path: '/main', title: '뒤로가기' }, // TODO:
        ]}
        rightIcon={[
          { iconId: 'home', path: '/main', title: 'home' },
          { iconId: 'more', path: '/', title: 'more' },
        ]}
      />
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
          className={S.button}
          height="2.8rem"
          onClick={() => navigate('join')}
        >
          참여하기
        </Button>
      </div>
    </article>
  );
}

export default PostDetail;
