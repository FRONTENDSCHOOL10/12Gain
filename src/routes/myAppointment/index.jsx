import S from '@/routes/myAppointment/style.module.css';
import MyPost from '@/routes/myAppointment/component/MyPost';
import { Outlet } from 'react-router-dom';

export function Component() {
  return (
    <div className={S.component}>
      <MyPost />
      <Outlet />
    </div>
  );
}
