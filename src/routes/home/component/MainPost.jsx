import Post from '@/components/Post/Post';
import S from '@/routes/home/component/MainPost.module.css';

function MainPost() {
  return (
    <div className={S.component}>
      <Post
        title="클라이밍1"
        date="2024년 9월 3일 월요일"
        place="성수동"
        member={2}
        category="러닝"
        id="1"
      />
      <Post
        title="클라이밍2"
        date="2024년 9월 4일 월요일"
        place="성수동"
        member={2}
        category="러닝"
        id="2"
      />
      <Post
        title="클라이밍3"
        date="2024년 9월 5일 월요일"
        place="성수동"
        member={2}
        category="러닝"
        id="3"
      />
    </div>
  );
}

export default MainPost;
