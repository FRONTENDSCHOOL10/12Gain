import { useNavigate } from 'react-router-dom';
import Icon from '@/components/Icon/Icon';
import Post from '@/components/Post/Post';
import PostButton from '@/components/PostButton/PostButton';
import S from '@/routes/home/component/MainPost.module.css';

function MainPost() {
  const navigate = useNavigate();

  const handlePostButtonClick = () => {
    navigate('/main/home/new/post');
  };

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

      <PostButton
        zIndex="1000"
        bottom="15.3rem"
        right="15.3rem"
        borderRadius="3.125rem"
        onClick={handlePostButtonClick} // 클릭 시 이동
      >
        <Icon id="calendarPlus" color={'var(--white)'}></Icon>
      </PostButton>
    </div>
  );
}

export default MainPost;
