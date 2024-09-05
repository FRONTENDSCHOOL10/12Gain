import S from '@/routes/community/style.module.css';

import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';
import BtnCreateFeed from './component/BtnCreateFeed';
import Feed from './component/Feed';

function Community() {
  return (
    <div className={S.component}>
      <Header text="커뮤니티" iconList={['search', 'chat', 'alarm']} />
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

export default Community;
