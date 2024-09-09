import S from '@/routes/community/style.module.css';

import { Outlet } from 'react-router-dom';
import BtnCreateFeed from './component/BtnCreateFeed';
import Feed from './component/Feed';
import { useState } from 'react';
import PostList from '@/routes/profile/PostList';

export function Component() {
  const [subNavList] = useState([
    { path: '/main/community', text: '최신', end: true },
    { path: '/main/community/new', text: '신규' },
  ]);

  return (
    <>
      <PostList list={subNavList}></PostList>
      <div className={S.component}>
        <aside>
          <BtnCreateFeed />
        </aside>
        <main>
          <Feed imgSrc="/running.png" />
          <Feed />
          <Feed imgSrc="/running.png" />
          <Feed />
          <Feed imgSrc="/running.png" />
          <Feed />
        </main>
        <Outlet />
      </div>
    </>
  );
}
