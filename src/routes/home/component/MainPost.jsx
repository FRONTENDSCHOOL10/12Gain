import S from '@/routes/home/component/MainPost.module.css';

import { useEffect } from 'react';
import Post from '@/components/Post/Post';
import usePostStore from '@/stores/postStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

function MainPost() {
  const { posts, fetchPosts, isLoading } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={S.component}>
      {posts.map((post) => {
        let formattedDate = '날짜 없음';
        try {
          if (post.date) {
            const date =
              typeof post.date === 'string'
                ? parseISO(post.date)
                : new Date(post.date);
            formattedDate = format(date, 'yyyy.MM.dd. a HH:mm', { locale: ko });
          }
        } catch (error) {
          console.error('날짜 포맷팅 오류:', error);
        }

        return (
          <Post
            key={post.id}
            title={post.title}
            date={formattedDate}
            place={post.location}
            member={Number(post.memberCount) || 0}
            category={post.category}
            id={post.id}
            writer={post.expand?.writer?.name || 'Unknown'}
          />
        );
      })}
    </div>
  );
}

export default MainPost;
