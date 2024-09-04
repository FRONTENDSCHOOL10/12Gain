import S from '@/routes/home/style.module.css';

import Header from '@/routes/home/component/header';
import MainPostList from '@/routes/home/component/MainPostList';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function Home() {
  const [subNavList] = useState([
    { path: '/home', text: '추천', end: true },
    { path: '/home/new', text: '신규' },
    { path: '/home/interest', text: '관심' },
  ]);

  return (
    <div className={S.component}>
      <Header />
      <MainPostList list={subNavList} />
      <Outlet />
    </div>
  );
}

export default Home;
