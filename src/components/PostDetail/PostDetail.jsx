import S from '@/components/PostDetail/style.module.css';
import { useParams } from 'react-router-dom';
import { string } from 'prop-types';
import { number } from 'prop-types';

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

  // 여기에 postId를 이용해 백엔드에서 데이터를 가져오거나,
  // 상태를 통해 데이터를 전달할 수 있습니다.
  return (
    <article className={S.component}>
      {/* 헤더 */}
      <img src="/running.png" alt="이미지없음" />
      <div className={S.input}>
        <h1>{title}</h1>
        <div className={S.detail}>
          {/* 아래의 <span>태그들 컴포넌트로 사용방식으로 변경 필요 */}
          <span>종목: {sportType}</span>
          <span>장소: {location}</span>
          <span>일시: {datetime}</span>
          <span>인원: {pop}</span>
        </div>
      </div>
      <div className={S.title}>
        내용
        <div className={S.description}>{description}</div>
      </div>

      <h1>Post 상세 페이지</h1>
      <p>Post ID: {postId}</p>
    </article>
  );
}

export default PostDetail;
