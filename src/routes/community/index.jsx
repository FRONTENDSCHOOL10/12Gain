import S from '@/routes/community/style.module.css';

import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';
import BtnCreateFeed from './component/BtnCreateFeed';
import Feed from './component/Feed';
import { useState } from 'react';
import PostList from '../profile/component/PostList';

export function Community() {
  const [subNavList] = useState([
    { path: '/community', text: '최신', end: true },
    { path: '/community/new', text: '신규' },
  ]);

  return (
    <>
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
      <PostList list={subNavList}></PostList>
      <Header
        text="커뮤니티"
        iconList={[
          { iconId: 'search', path: '/main/search', title: '검색' },
          { iconId: 'chat', path: '/main/chat', title: '채팅' },
          { iconId: 'alarm', path: '/main/alarm', title: '알림' },
        ]}
      />
    </>
  );
}
