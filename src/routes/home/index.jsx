import S from '@/routes/home/style.module.css';

import MainPostList from '@/routes/home/component/MainPostList';
import PostButton from '@/components/Button/PostButton';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './banner/Banner';

export function Component() {
  const [subNavList] = useState([
    { path: '/main/home', text: '추천', end: true },
    { path: '/main/home/new', text: '신규' },
    { path: '/main/home/interest', text: '관심' },
  ]);

  return (
    <div className={S.component}>
      <aside>
        <div className={S.button__container}>
          <PostButton iconId={'calendarPlus'} path={'/main/home/new/post'} />
        </div>
      </aside>
      <MainPostList list={subNavList} />
      <ul className={S.subNavList}>
        {subNavList.map((item, index) => (
          <li key={index} className={S.subNavItem}>
            <a href={item.path}>{item.text}</a>
          </li>
        ))}
      </ul>
      <Banner />
      <Outlet />
    </div>
  );
}
