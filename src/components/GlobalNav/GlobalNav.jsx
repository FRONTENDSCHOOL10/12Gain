import S from './style.module.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@/components/Icon/Icon';

function GlobalNav() {
  const [navList] = useState([
    { path: '/', text: '홈', icon: 'home', iconFull: 'homeFull' },
    {
      path: '/myAppointment',
      text: '내 모임',
      icon: 'calendar',
      iconFull: 'calendarFull',
    },
    {
      path: '/community',
      text: '커뮤니티',
      icon: 'people',
      iconFull: 'peopleFull',
    },
    {
      path: '/profile',
      text: '프로필',
      icon: 'person',
      iconFull: 'personFull',
    },
  ]);

  return (
    <nav className={S.component}>
      <ul>
        {navList.map(({ path, text, icon, iconFull }) => (
          <li key={path}>
            <NavLink to={path}>
              {({ isActive }) =>
                isActive ? (
                  <Icon id={iconFull} text={text}></Icon>
                ) : (
                  <Icon id={icon} text={text} />
                )
              }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GlobalNav;
