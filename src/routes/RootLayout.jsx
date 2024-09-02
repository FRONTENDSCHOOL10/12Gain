import { Outlet } from 'react-router-dom';
import GlobalNav from '@/components/GlobalNav/GlobalNav';

function RootLayout() {
  return (
    <div>
      <Outlet />
      <GlobalNav />
    </div>
  );
}

export default RootLayout;
