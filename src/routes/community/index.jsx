import S from '@/routes/community/style.module.css';

import Header from '@/components/Header/Header';
import Button from '@/components/Button/Button';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/Icon/Icon';

function Community() {
  const navigate = useNavigate();

  return (
    <div className={S.component}>
      <Header text="커뮤니티" iconList={['search', 'chat', 'alarm']} />
      <Button width="48px" height="48px" onClick={() => navigate('create')}>
        <Icon id="write" width={28} height={28} color={'var(--white)'} />
      </Button>
      <Outlet />
    </div>
  );
}

export default Community;
