import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import S from '@/routes/profile/Setting/Setting.module.css';
import SettingList from '../component/SettingList';

function Setting() {
  return (
    <div className={S.component}>
      <HeaderForDetails
        text="설정"
        leftIcon={[{ iconId: 'left', path: '/profile', title: '뒤로가기' }]}
      />
      <main>
        <h2 className="sr-only">설정 항목</h2>
        <ul>
          <SettingList text="공지사항" />
          <SettingList text="자주 묻는 질문" />
          <SettingList text="문의 하기" />
          <SettingList text="로그아웃" />
          <SettingList text="탈퇴하기" />
        </ul>
      </main>
    </div>
  );
}

export default Setting;
