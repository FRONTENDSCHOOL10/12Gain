import S from '@/routes/community/component/Feed.module.css';

import BtnThumsup from '@/routes/community/component/BtnThumsup';
import FeedProfile from '@/routes/community/component/FeedProfile';
import KebabMenu from '@/components/KebabMenu/KebabMenu';
import PropTypes from 'prop-types';
import BtnComment from './BtnComment';
import { useState } from 'react';
import { useRef } from 'react';
import { animate } from 'motion';
import { object, array } from 'prop-types';
import Comment from '../Comment/Comment';

function Feed({
  imgSrc,
  content,
  feed,
  comments,
  createdAt,
  category,
  writer,
}) {
  const [commentActive, setcommentActive] = useState(false);

  const handleCommentClick = () => {
    if (commentActive) {
      setcommentActive(false);
    }

    if (!commentActive) {
      setcommentActive(true);
      handleDropUp();
    }
  };

  const commentRef = useRef(null);

  const handleDropUp = () => {
    const { current: element } = commentRef;

    animate(
      element,
      {
        transform: ['translateY(50vh)', 'translateY(0)'],
        position: 'fixed',
        bottom: '0',
      },
      { duration: 0.5 }
    );
  };

  const count = comments ? comments.length : 0;

  return (
    <>
      <article className={S.Feed}>
        <section className={S.feedHeader}>
          <FeedProfile
            nickName={writer?.nickname || 'Unknown'}
            createdAt={createdAt}
          />
          <KebabMenu category={category} categoryText="게시물" />
        </section>
        <section className={S.feedMainDesc}>
          <span>{content}</span>
        </section>
        {imgSrc.slice(-1) !== '/' && (
          <section className={S.feedMainImg}>
            <img src={imgSrc} alt="Feed image" />
          </section>
        )}
        <section className={S.BtnCount}>
          <BtnThumsup />
          <BtnComment onClick={handleCommentClick} count={count} />
        </section>
      </article>

      <div ref={commentRef}>
        {commentActive && (
          <Comment
            isActive={setcommentActive}
            feed={feed}
            commentList={comments}
          />
        )}
      </div>
    </>
  );
}

Feed.propTypes = {
  imgSrc: PropTypes.string,
  userId: PropTypes.string,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string,
  writer: PropTypes.shape({
    nickname: PropTypes.string,
  }),
  user: object,
  feed: object,
  comments: array,
};
export default Feed;
