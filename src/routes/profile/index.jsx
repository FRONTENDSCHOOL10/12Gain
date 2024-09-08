import S from '@/routes/profile/style.module.css';

import Header from '@/components/Header/Header';
import ProfileCard from '@/routes/profile/component/ProfileCard';
import Button from '@/components/Button/Button';
import PostList from '@/routes/profile/component/PostList';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [subNavList] = useState([
    { path: '/profile', text: '모임', end: true },
    { path: '/profile/community', text: '게시글' },
  ]);

  const navigate = useNavigate();

  return (
    <div className={S.component}>
      <Header
        text="프로필"
        iconList={[{ iconId: 'setting', path: '/profile/setting' }]}
      />
      <main className={S.component__profile}>
        <ProfileCard nickName="이름" />
        <Button
          className={S.component__profile__Button}
          onClick={() => navigate('edit')}
        >
          프로필 수정
        </Button>
        <PostList list={subNavList}></PostList>
      </main>
      <Outlet />
    </div>
  );
}

export default Profile;
