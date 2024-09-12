import S from '@/routes/community/component/Feed.module.css';

import BtnThumsup from '@/routes/community/component/BtnThumsup';
import FeedProfile from '@/routes/community/component/FeedProfile';
import KebabMenu from '@/components/KebabMenu/KebabMenu';
import { string } from 'prop-types';
import BtnComment from './BtnComment';

function Feed({ imgSrc, userId }) {
  return (
    <article className={S.Feed}>
      <section className={S.feedHeader}>
        <FeedProfile nickName="라옹" />

        {/* 로컬 스토리지에서 가져오는 auth 데이터 부분 수정 필요 */}
        {userId === localStorage.getItem('auth') && <KebabMenu />}
      </section>
      <section className={S.feedMainDesc}>
        <span>
          상세 내용 입력상세 내용 입력상세 내용 입력상세 내용 입력상세 내용
          입력상세 내용 입력상세 내용 입력상세 내용 입력상세 내용 입력상세 내용
          입력상세 내용 입력상세 내용 입력상세 내용 입력상세 내용 입력상세 내용
          입력상세 내용 입력상세 내용 입력상세 내용 입력상세 내용 입력상세 내용
          입력상세 내용 입력상세 내용 입력
        </span>
      </section>
      {imgSrc && (
        <section className={S.feedMainImg}>
          <img src={imgSrc} alt="" />
        </section>
      )}
      <section className={S.BtnCount}>
        <BtnThumsup />
        <BtnComment />
      </section>
    </article>
  );
}

Feed.propTypes = {
  imgSrc: string,
  userId: string,
};

export default Feed;
