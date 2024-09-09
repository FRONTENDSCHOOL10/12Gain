import S from '@/routes/profile/component/FeedCard.module.css';

import KebabMenu from '@/components/KebabMenu/KebabMenu';
import { string } from 'prop-types';

FeedCard.propTypes = {
  id: string,
  content: string.isRequired,
  date: string.isRequired,
  url: string,
};

function FeedCard({ id, content, date, url }) {
  return (
    <article className={S.component}>
      <h2 className="sr-only">{`게시글 ${id}`}</h2>
      <img src={url} alt="게시글 이미지" />
      <div className={S.content__container}>
        <div className={S.content__container__sub}>
          <span className={S.content}>{content}</span>
          <KebabMenu />
        </div>
        <span className={S.content__date}>{date}</span>
      </div>
    </article>
  );
}

export default FeedCard;
