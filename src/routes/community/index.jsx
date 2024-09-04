import S from '@/routes/profile/style.module.css';

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
      <Button
        width="1.75rem"
        height="1.75rem"
        onClick={() => navigate('create')}
      >
        <Icon id="write" width={16} height={16} />
      </Button>
      <Outlet />
    </div>
  );
}

export default Community;
