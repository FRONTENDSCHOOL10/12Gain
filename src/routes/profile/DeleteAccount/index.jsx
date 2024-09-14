import Button from '@/components/Button/Button';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import S from '@/routes/profile/DeleteAccount/DeleteAccount.module.css';
import pb from '@/api/pb.js'; // PocketBase 인스턴스 가져오기
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅
import { useState } from 'react';
import toast from 'react-hot-toast'; // 알림 메시지 표시를 위한 라이브러리

const NICKNAME = '닉네임';

export function Component() {
  const [agreed, setAgreed] = useState(false); // 체크박스 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  let nickName = NICKNAME;

  const handleDeleteAccount = async () => {
    if (!agreed) {
      toast.error('안내사항에 동의해주세요.');
      return;
    }

    try {
      const userId = pb.authStore.model?.id; // 현재 로그인된 사용자 ID 가져오기

      if (!userId) {
        throw new Error('로그인된 사용자를 찾을 수 없습니다.');
      }

      // 사용자 삭제 요청
      await pb.collection('users').delete(userId);

      // 성공 알림 및 로그아웃 후 페이지 이동
      toast.success('회원 탈퇴가 완료되었습니다.');
      pb.authStore.clear(); // 인증 정보 삭제
      navigate('/'); // 메인 페이지로 이동 (로그아웃 상태)
    } catch (error) {
      console.error('회원 탈퇴 실패:', error);
      toast.error('회원 탈퇴에 실패했습니다.');
    }
  };

  return (
    <div className={S.component}>
      <HeaderForDetails
        text="회원 탈퇴"
        leftIcon={[
          { iconId: 'left', path: '/main/profile/setting', title: '뒤로가기' },
        ]}
      />
      <div className={S.content__container}>
        <h2>
          <span>{nickName}님,</span>
          <span>정말 탈퇴하시겠어요?</span>
        </h2>
        <span className={S.contents}>
          탈퇴하면 일정 등록, 프로필, 채팅 내역, 에너지, 적립 포인트 등 모든
          데이터가 삭제되고 어떠한 경우에도 복구할 수 없습니다. 또한 계정 삭제
          후 30일 간 다시 가입할 수 없습니다.
        </span>
        <div className={S.terms__container}>
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={() => setAgreed((prev) => !prev)} // 체크박스 상태 변경
          />
          <label htmlFor="terms">
            안내사항을 모두 확인했으며, 이에 동의합니다.
          </label>
        </div>
      </div>
      <Button className={S.button} onClick={handleDeleteAccount}>
        탈퇴하기
      </Button>
    </div>
  );
}

export default Component;
