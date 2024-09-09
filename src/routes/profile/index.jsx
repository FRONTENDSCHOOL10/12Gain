import S from '@/routes/profile/style.module.css';

import ProfileCard from '@/routes/profile/component/ProfileCard';
import Button from '@/components/Button/Button';
import PostList from '@/routes/profile/component/PostList';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useProfileNav } from '@/stores/route';

export function Component() {
  const [profileNav] = useProfileNav((s) => [s.profileNav]);

  const navigate = useNavigate();

  return (
    <div className={S.component}>
      <main>
        <ProfileCard nickName="이름" />
        <Button
          text="프로필 수정"
          height="2.8rem"
          onClick={() => navigate('edit')}
        />
        <PostList list={profileNav}></PostList>
        <Outlet />
      </main>
    </div>
  );
}
