import S from '@/routes/profile/style.module.css';

import Header from '@/routes/profile/component/Header';
import ProfileCard from '@/routes/profile/component/ProfileCard';
import Button from '@/components/Button/Button';
import PostList from '@/routes/profile/component/PostList';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function Profile() {
  const [subNavList] = useState([
    { path: '/profile', text: '모임', end: true },
    { path: '/profile/community', text: '게시글' },
  ]);

  return (
    <div className={S.component}>
      <Header />
      <ProfileCard nickName="이름" />
      <Button text="프로필 수정" height="2.8rem" />
      <PostList list={subNavList}></PostList>
      <Outlet />
    </div>
  );
}

export default Profile;
