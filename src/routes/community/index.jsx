import S from '@/routes/community/style.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import Feed from './component/Feed';
import { useState, useEffect } from 'react';
import PostList from '@/routes/profile/PostList';
import PostButton from '@/components/Button/PostButton';
import communityStore from '@/stores/communityStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { useCommentData } from '@/stores/comment';

export function Component() {
  const [subNavList] = useState([
    { path: '/main/community/new', text: '신규' },
    { path: '/main/community/recommend', text: '추천' },
  ]);

  const location = useLocation();
  const { feeds, fetchFeeds, setFilter, isLoading } = communityStore();
  const { commentList, fetchCommentsData } = useCommentData();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentTab =
      subNavList.find((item) => item.path === currentPath)?.text || '추천';
    setFilter({ category: currentTab });
    fetchFeeds();
  }, [location, setFilter, fetchFeeds, subNavList]);

  useEffect(() => {
    fetchCommentsData();
  }, [fetchCommentsData]);

  return (
    <>
      <PostList list={subNavList}></PostList>
      <div className={S.component}>
        <aside>
          <div className={S.button__container}>
            <PostButton iconId={'write'} path={'/main/community/create'} />
          </div>
        </aside>
        <main>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            feeds.map((feed) => (
              <Feed
                key={feed.id}
                imgSrc={feed.image}
                userId={feed.writer}
                content={feed.content}
                createdAt={feed.created}
                category={feed.category}
                writer={feed.expand?.writer}
                user={feed.expand}
                feed={feed}
                comments={commentList.filter((item) => item.feed === feed.id)}
              />
            ))
          )}
        </main>
        <Outlet />
      </div>
    </>
  );
}
