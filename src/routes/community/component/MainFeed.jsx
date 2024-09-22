import { useEffect } from 'react';
import Feed from './Feed';
import { useCommentData } from '@/stores/comment';
import communityStore from '@/stores/communityStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

function MainFeed() {
  const { commentList, fetchCommentsData } = useCommentData();

  const { feeds, fetchFeeds, isLoading } = communityStore();

  useEffect(() => {
    fetchFeeds();
  }, [fetchFeeds]);

  useEffect(() => {
    fetchCommentsData();
  }, [fetchCommentsData]);

  if (isLoading) return <LoadingSpinner />;

  console.log(feeds);

  return feeds.map((feed) => (
    <Feed
      key={feed.id}
      imgSrc={feed.image}
      userId={feed.writer}
      content={feed.content}
      createdAt={feed.created}
      category={feed.category}
      writer={feed.expand?.writer}
      feed={feed}
      comments={commentList.filter((item) => item.feed === feed.id)}
    />
  ));
}

export default MainFeed;
