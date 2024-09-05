import S from '@/routes/community/style.module.css';

import BtnThumsup from '@/routes/community/component/BtnThumsup';
import BtnChat from '@/routes/community/component/BtnChat';
import FeedProfile from '@/routes/community/component/FeedProfile';
import KebabMenu from '@/components/KebabMenu/KebabMenu';
import { string } from 'prop-types';

function Feed({ imgSrc }) {
  return (
    <article className={S.component}>
      <section className={S.feedHeader}>
        <FeedProfile nickName="라옹" />
        <KebabMenu />
      </section>
      <section className={S.feedMainDesc}>
        <span>상세 내용 입력</span>
      </section>
      {imgSrc && (
        <section className={S.feedMainImg}>
          <img src={imgSrc} alt="" />
        </section>
      )}
      <section className={S.BtnCount}>
        <BtnThumsup />
        <BtnChat />
      </section>
    </article>
  );
}

Feed.propTypes = {
  imgSrc: string,
};

export default Feed;
