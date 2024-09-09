import S from '@/routes/RootLayout.module.css';

import { Outlet } from 'react-router-dom';
import GlobalNav from '@/components/GlobalNav/GlobalNav';

function RootLayout() {
  return (
    <div className={S.component}>
      <GlobalNav />
      <Outlet />
    </div>
  );
}

export default RootLayout;
