import S from '@/routes/profile/component/MyFeed.module.css';

import FeedCard from '@/routes/profile/component/FeedCard';

export function Component() {
  return (
    <div className={S.component}>
      <FeedCard
        content={
          '상세 내용이 엄청나게 길어지면 ...으로 표현하기 위해서 테스트 용도로 넣은 텍스트인데 5줄까지 허용해서 엄청나게 길게 넣어야 댐. 가나다라마사바아차카타파하abcdefghifklmnopqrstuwxyz1234567890ㅂㄿㅋㅇㄻㄷㄻ'
        }
        url={'/profile.png'}
        date={'2024.09.09'}
      />
      <FeedCard
        content={'상세 내용'}
        url={'/profile.png'}
        date={'2024.09.09'}
      />
      <FeedCard
        content={'상세 내용'}
        url={'/profile.png'}
        date={'2024.09.09'}
      />
    </div>
  );
}
