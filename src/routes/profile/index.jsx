import S from '@/routes/profile/style.module.css';

import ProfileCard from '@/routes/profile/component/ProfileCard';
import Button from '@/components/Button/Button';
import PostList from '@/routes/profile/PostList';
import { Outlet } from 'react-router-dom';
import { useProfileNav } from '@/stores/route';

export function Component() {
  const [profileNav] = useProfileNav((s) => [s.profileNav]);

  return (
    <div className={S.component}>
      <main className={S.component__profile}>
        <ProfileCard nickName="이름" />
        <Button
          path="edit"
          title="프로필 수정 페이지로 이동하기"
          className="button-main"
        >
          프로필 수정
        </Button>
        <PostList list={profileNav}></PostList>
        <Outlet />
      </main>
    </div>
  );
}
