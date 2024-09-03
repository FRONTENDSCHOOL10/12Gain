import Post from '@/components/Post/Post';
import S from '@/routes/profile/component/MyPost.module.css';

function MyPost() {
  return (
    <div className={S.component}>
      <Post
        title="클라이밍"
        date="2024년 9월 3일 월요일"
        place="성수동"
        member={2}
        category="러닝"
      />
      <Post title="클라이밍" />
      <Post title="클라이밍" />
    </div>
  );
}

export default MyPost;
