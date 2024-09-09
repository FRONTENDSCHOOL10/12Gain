import S from '@/routes/community/style.module.css';

import { Outlet } from 'react-router-dom';
import BtnCreateFeed from './component/BtnCreateFeed';
import Feed from './component/Feed';

export function Component() {
  return (
    <div className={S.component}>
      <div>최신 신규</div>
      <main>
        <Feed imgSrc="/running.png" />
        <Feed />
        <BtnCreateFeed />
      </main>
      <Outlet />
    </div>
  );
}
