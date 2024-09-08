import S from '@/routes/community/style.module.css';

import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';
import BtnCreateFeed from './component/BtnCreateFeed';
import Feed from './component/Feed';
import { useState } from 'react';
import PostList from '../profile/component/PostList';

function Community() {
  const [subNavList] = useState([
    { path: '/community', text: '최신', end: true },
    { path: '/community/new', text: '신규' },
  ]);

  return (
    <>
      <Header text="커뮤니티" iconList={['search', 'chat', 'alarm']} />
      <div className={S.component}>
        <PostList list={subNavList}></PostList>
        <main>
          <BtnCreateFeed />
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

export default Community;
