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
      <Header text="프로필" iconList={['search', 'chat']} />
      <ProfileCard nickName="이름" />
      <Button
        text="프로필 수정"
        height="2.8rem"
        onClick={() => navigate('edit')}
      />
      <PostList list={subNavList}></PostList>
      <Outlet />
    </div>
  );
}

export default Profile;
