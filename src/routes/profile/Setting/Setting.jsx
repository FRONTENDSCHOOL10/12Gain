import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import S from '@/routes/profile/Setting/Setting.module.css';
import SettingList from '../component/SettingList';

function Setting() {
  return (
    <div className={S.component}>
      <HeaderForDetails text="설정" leftIcon={['left']} />
      <main>
        <h2 className="sr-only">설정 항목</h2>
        <ul>
          <SettingList text="공지사항" title="공지사항으로 이동" />
          <SettingList text="자주 묻는 질문" title="자주 묻는 질문으로 이동" />
          <SettingList text="문의 하기" title="문의 하기로 이동" />
          <SettingList text="로그아웃" title="로그아웃으로 이동" />
          <SettingList text="탈퇴하기" title="탈퇴하기로 이동" />
        </ul>
      </main>
    </div>
  );
}

export default Setting;
