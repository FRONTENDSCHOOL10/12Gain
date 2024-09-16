import S from '@/routes/myAppointment/style.module.css';
import MyPost from '@/routes/myAppointment/component/MyPost';
import { Outlet } from 'react-router-dom';

export function Component() {
  return (
    <div className={S.component}>
      <MyPost /> {/* MyPost 컴포넌트만 렌더링 */}
      <Outlet />
    </div>
  );
}
