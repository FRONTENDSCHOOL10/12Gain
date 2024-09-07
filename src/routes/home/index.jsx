import S from '@/routes/home/style.module.css';
import Header from '@/components/Header/Header';
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
      <Header iconList={['search', 'chat', 'alarm']} />
      <ul className={S.subNavList}>
        {subNavList.map((item, index) => (
          <li key={index} className={S.subNavItem}>
            <a href={item.path}>{item.text}</a>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Home;
