import GlobalNav from '@/components/GlobalNav/GlobalNav';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="S.component">
      <Outlet />
      <GlobalNav />
    </div>
  );
}

export default RootLayout;
