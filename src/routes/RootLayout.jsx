import S from '@/routes/RootLayout.module.css';

import { Outlet } from 'react-router-dom';
import GlobalNav from '@/components/GlobalNav/GlobalNav';

export function Component() {
  return (
    <div className={S.component}>
      <GlobalNav />
      <Outlet />
    </div>
  );
}
