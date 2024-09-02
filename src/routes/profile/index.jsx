import S from '@/routes/profile/style.module.css';

import Header from '@/routes/profile/component/Header';
import ProfileCard from '@/routes/profile/component/ProfileCard';

function Profile() {
  return (
    <div className={S.component}>
      <Header />
      <ProfileCard nickName="이름" />
    </div>
  );
}

export default Profile;
