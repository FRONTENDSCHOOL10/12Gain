import S from '@/routes/community/style.module.css';

import { Outlet } from 'react-router-dom';
import Feed from './component/Feed';
import { useState } from 'react';
import PostList from '@/routes/profile/PostList';
import PostButton from '@/components/Button/PostButton';

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
          <div className={S.button__container}>
            <PostButton iconId={'write'} path={'/main/community/create'} />
          </div>
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
