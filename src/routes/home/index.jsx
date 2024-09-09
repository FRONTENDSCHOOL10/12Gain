import S from '@/routes/home/style.module.css';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export function Component() {
  const [subNavList] = useState([
    { path: '/home', text: '추천', end: true },
    { path: '/home/new', text: '신규' },
    { path: '/home/interest', text: '관심' },
  ]);

  return (
    <div className={S.component}>
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
