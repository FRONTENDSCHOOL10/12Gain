import S from '@/routes/community/component/Feed.module.css';

import BtnThumsup from '@/routes/community/component/BtnThumsup';
import FeedProfile from '@/routes/community/component/FeedProfile';
import KebabMenu from '@/components/KebabMenu/KebabMenu';

import BtnComment from './BtnComment';
import Comment from '../Comment/Comment';
import { useState } from 'react';
import { useRef } from 'react';
import { animate } from 'motion';
import { oneOfType, object, array, string } from 'prop-types';

function Feed({ imgSrc, userId, content, user, feed, comments }) {
  const currentUserId = localStorage.getItem('auth');
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
          <FeedProfile nickName={user?.writer?.nickname} />
          {userId === currentUserId && <KebabMenu />}
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
  imgSrc: oneOfType([string, array]),
  userId: string,
  content: string,
  user: object,
  feed: object,
  comments: array,
};

export default Feed;
