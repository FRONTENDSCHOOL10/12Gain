import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/Icon/Icon';
import Post from '@/components/Post/Post';
import PostButton from '@/components/PostButton/PostButton';
import S from '@/routes/home/component/MainPost.module.css';
import usePostStore from '@/stores/postStore';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

function MainPost() {
  const navigate = useNavigate();
  const { posts, fetchPosts, isLoading } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handlePostButtonClick = () => {
    navigate('/main/home/new/post');
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={S.component}>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          date={post.date}
          time={post.time}
          place={post.location}
          member={Number(post.memberCount) || 0}
          category={post.category}
          id={post.id}
          writer={post.expand?.writer?.name || 'Unknown'}
        />
      ))}

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
