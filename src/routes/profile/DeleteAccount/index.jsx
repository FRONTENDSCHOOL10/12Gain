import Button from '@/components/Button/Button';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import S from '@/routes/profile/DeleteAccount/DeleteAccount.module.css';

const NICKNAME = '닉네임';

export function Component() {
  let nickName = NICKNAME;

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
          데터가 삭제되고 어떠한 경우에도 복구할 수 없습니다. 또한 계정 삭제 후
          30일 간 다시 가입할 수 없습니다.
        </span>
        <div className={S.terms__container}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            안내사항을 모두 확인했으며, 이에 동의합니다.
          </label>
        </div>
      </div>
      <Button className={S.button}>탈퇴하기</Button>
    </div>
  );
}
