import S from '@/routes/profile/style.module.css';

import ProfileCard from '@/routes/profile/component/profileCard';
import Button from '@/components/Button/Button';
import PostList from '@/routes/profile/PostList';
import { Outlet } from 'react-router-dom';
import { useProfileNav } from '@/stores/route';
import { useUserProfile } from '@/stores/users';
import { useKebabMenuStore } from '@/stores/kebabStore';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { useState } from 'react';

export function Component() {
  const [profileNav] = useProfileNav((s) => [s.profileNav]);
  const { userData, fetchUserProfile, isLoading } = useUserProfile();
  const { currentUser, fetchUser } = useKebabMenuStore();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    async function initializeUser() {
      if (!currentUser) {
        await fetchUser();
      }
      setIsInitialLoading(false);
    }
    initializeUser();
  }, [currentUser, fetchUser]);

  useEffect(() => {
    if (currentUser && !isInitialLoading) {
      fetchUserProfile(currentUser);
    }
  }, [currentUser, fetchUserProfile, isInitialLoading]);

  if (isInitialLoading || isLoading || !userData) {
    return <LoadingSpinner />;
  }

  return (
    <div className={S.component}>
      <main className={S.component__profile}>
        <ProfileCard
          nickName={userData.nickname}
          description={userData.introduction}
        />
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
