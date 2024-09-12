import S from '@/routes/home/style.module.css';

import MainPostList from '@/routes/home/component/MainPostList';
import PostButton from '@/components/Button/PostButton';
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from './banner/Banner';
import usePostStore from '@/stores/postStore';

export function Component() {
  const [subNavList] = useState([
    { path: '/main/home', text: '추천', end: true },
    { path: '/main/home/new', text: '신규' },
    { path: '/main/home/interest', text: '관심' },
  ]);

  const { setFilter, fetchPosts } = usePostStore();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentTab =
      subNavList.find((item) => item.path === currentPath)?.text || '추천';
    setFilter({ mainCategory: currentTab });
    fetchPosts();
  }, [location, setFilter, fetchPosts, subNavList]);

  return (
    <div className={S.component}>
      <aside>
        <div className={S.button__container}>
          <PostButton iconId={'calendarPlus'} path={'/main/home/new/post'} />
        </div>
      </aside>
      <MainPostList list={subNavList} />
      <Banner />
      <Outlet />
    </div>
  );
}
