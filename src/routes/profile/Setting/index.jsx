import { useState } from 'react'; // 상태 관리를 위한 useState
import S from '@/routes/profile/Setting/Setting.module.css';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import SettingList from '@/routes/profile/component/SettingList';
import pb from '@/api/pb'; // PocketBase 인스턴스 가져오기
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅
import toast from 'react-hot-toast';

export function Component() {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // 팝업 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleLogout = async () => {
    try {
      pb.authStore.clear();
      navigate('/');
      toast.success('로그아웃 되었습니다.');
    } catch (error) {
      toast.error('로그아웃에 실패했습니다. 다시 시도하세요.');
    }
  };

  return (
    <div className={S.component}>
      <HeaderForDetails
        text="설정"
        leftIcon={[
          { iconId: 'left', path: '/main/profile/edit', title: '뒤로가기' },
        ]}
      />
      <main>
        <h2 className="sr-only">설정 항목</h2>
        <ul>
          <SettingList text="공지사항" />
          <SettingList text="자주 묻는 질문" />
          <SettingList text="문의 하기" />
          <SettingList
            text="로그아웃"
            onClick={() => setShowLogoutPopup(true)}
          />
          <SettingList text="탈퇴하기" />
        </ul>
      </main>

      {showLogoutPopup && (
        <div className={S.logoutPopupOverlay}>
          <div className={S.logoutPopup}>
            <p>로그아웃 하시겠습니까?</p>
            <div className={S.logoutPopupButtons}>
              <button onClick={() => setShowLogoutPopup(false)}>취소</button>
              <button onClick={handleLogout}>로그아웃</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Component;
