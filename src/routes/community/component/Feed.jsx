import S from '@/routes/community/component/Feed.module.css';

import BtnThumsup from '@/routes/community/component/BtnThumsup';
import FeedProfile from '@/routes/community/component/FeedProfile';
import KebabMenu from '@/components/KebabMenu/KebabMenu';
import PropTypes from 'prop-types';

import BtnComment from './BtnComment';

function Feed({ imgSrc, userId, content, createdAt, category, writer }) {
  return (
    <article className={S.Feed}>
      <section className={S.feedHeader}>
        <FeedProfile
          nickName={writer?.name || 'Unknown'}
          createdAt={createdAt}
        />
        <KebabMenu category={category} categoryText="게시물" />
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
  imgSrc: PropTypes.string,
  userId: PropTypes.string,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  writer: PropTypes.shape({
    name: PropTypes.string,
  }),
};
export default Feed;
