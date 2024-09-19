import S from '@/routes/community/style.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import Feed from './component/Feed';
import { useState, useEffect } from 'react';
import PostList from '@/routes/profile/PostList';
import PostButton from '@/components/Button/PostButton';
import communityStore from '@/stores/communityStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

export function Component() {
  const [subNavList] = useState([
    { path: '/main/community', text: '추천', end: true },
    { path: '/main/community/new', text: '신규' },
  ]);

  const location = useLocation();
  const { feeds, fetchFeeds, setFilter, isLoading } = communityStore();
  const currentUserId = localStorage.getItem('auth');

  useEffect(() => {
    const currentPath = location.pathname;
    const currentTab =
      subNavList.find((item) => item.path === currentPath)?.text || '추천';
    setFilter({ category: currentTab });
    fetchFeeds();
  }, [location, setFilter, fetchFeeds, subNavList]);

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
              />
            ))
          )}
        </main>
        <Outlet />
      </div>
    </>
  );
}
