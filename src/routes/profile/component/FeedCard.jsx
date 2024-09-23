import S from '@/routes/profile/component/FeedCard.module.css';
import KebabMenu from '@/components/KebabMenu/KebabMenu';
import { string } from 'prop-types';

FeedCard.propTypes = {
  content: string.isRequired,
  imageUrl: string,
  date: string.isRequired,
  writer: string.isRequired,
};

function FeedCard({ content, feedId, imageUrl, date, writer }) {
  return (
    <article className={S.component}>
      <h2 className="sr-only">{`${date} 게시글`}</h2>
      {imageUrl && <img src={imageUrl} alt={`${date} 게시글의 이미지`} />}
      <div className={S.content__container}>
        <div className={S.content__container__sub}>
          <span className={S.content}>{content}</span>
          <KebabMenu
            category="feeds"
            feedId={feedId}
            categoryText="게시물"
            writer={writer}
          />
        </div>
        <span className={S.content__date}>{date}</span>
      </div>
    </article>
  );
}

export default FeedCard;
