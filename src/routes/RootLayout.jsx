import S from '@/routes/RootLayout.module.css';

import { Outlet } from 'react-router-dom';
import GlobalNav from '@/components/GlobalNav/GlobalNav';
import Header from '@/components/Header/Header';

export function Component() {
  return (
    <div className={S.component}>
      <Header />
      <GlobalNav />
      <Outlet />
    </div>
  );
}
