import S from '@/routes/community/component/Feed.module.css';

import BtnThumsup from '@/routes/community/component/BtnThumsup';
import FeedProfile from '@/routes/community/component/FeedProfile';
import KebabMenu from '@/components/KebabMenu/KebabMenu';
import PropTypes from 'prop-types';

import BtnComment from './BtnComment';

function Feed({ imgSrc, userId, content }) {
  const currentUserId = localStorage.getItem('auth');

  return (
    <article className={S.Feed}>
      <section className={S.feedHeader}>
        <FeedProfile nickName="라옹" />

        {/* 로컬 스토리지에서 가져오는 auth 데이터 부분 수정 필요 */}
        {/* {userId === localStorage.getItem('auth') && <KebabMenu />} */}
        <KebabMenu />
      </section>
      <section className={S.feedMainDesc}>
        <span>{content}</span>
      </section>
      {imgSrc && (
        <section className={S.feedMainImg}>
          <img
            src={imgSrc}
            alt="Feed image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/path/to/fallback/image.jpg';
            }}
          />
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
  imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  userId: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Feed;
