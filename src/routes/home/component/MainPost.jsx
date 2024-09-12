import S from '@/routes/home/component/MainPost.module.css';

import { useEffect } from 'react';
import Post from '@/components/Post/Post';
import usePostStore from '@/stores/postStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

function MainPost() {
  const { posts, fetchPosts, isLoading } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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
    </div>
  );
}

export default MainPost;
