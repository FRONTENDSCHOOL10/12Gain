import { Outlet } from 'react-router-dom';
import GlobalNav from '@/components/GlobalNav/GlobalNav';
import Header from '@/components/Header/Header';

export function Component() {
  return (
    <div>
      <Header />
      <GlobalNav />
      <Outlet />
    </div>
  );
}
