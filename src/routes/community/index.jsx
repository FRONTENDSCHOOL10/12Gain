import S from '@/routes/community/style.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PostList from '@/routes/profile/PostList';
import PostButton from '@/components/Button/PostButton';
import communityStore from '@/stores/communityStore';

export function Component() {
  const [subNavList] = useState([
    { path: '/main/community/new', text: '신규' },
    { path: '/main/community/recommend', text: '추천' },
  ]);

  const location = useLocation();
  const navigate = useNavigate();
  const { fetchFeeds, setFilter } = communityStore();

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === '/main/community') {
      navigate('/main/community/new', { replace: true });
    }

    const currentTab =
      subNavList.find((item) => item.path === currentPath)?.text || '추천';
    setFilter({ category: currentTab });
    fetchFeeds();
  }, [location, setFilter, fetchFeeds, subNavList]);

  return (
    <>
      <div className={S.component}>
        <aside>
          <div className={S.button__container}>
            <PostButton iconId={'write'} path={'/main/community/create'} />
          </div>
        </aside>
        <PostList list={subNavList}></PostList>
        <Outlet />
      </div>
    </>
  );
}
