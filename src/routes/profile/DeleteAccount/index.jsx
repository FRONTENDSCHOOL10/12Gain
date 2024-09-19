import Button from '@/components/Button/Button';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import S from '@/routes/profile/DeleteAccount/DeleteAccount.module.css';
import pb from '@/api/pb.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const NICKNAME = '닉네임';

export function Component() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  let nickName = NICKNAME;

  const handleDeleteAccount = async () => {
    if (!agreed) {
      toast.error('안내사항에 동의해주세요.');
      return;
    }

    try {
      const userId = pb.authStore.model?.id;

      if (!userId) {
        throw new Error('로그인된 사용자를 찾을 수 없습니다.');
      }

      await pb.collection('users').delete(userId);

      toast.success('회원 탈퇴가 완료되었습니다.');
      pb.authStore.clear();
      navigate('/');
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
          데이터가 삭제되고 어떠한 경우에도 복구할 수 없어요. 또한 계정 삭제 후
          30일간 다시 가입할 수 없어요.
        </span>
        <div className={S.terms__container}>
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={() => setAgreed((prev) => !prev)}
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

// import Button from '@/components/Button/Button';
// import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
// import S from '@/routes/profile/DeleteAccount/DeleteAccount.module.css';
// import pb from '@/api/pb.js';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import Icon from '@/components/Icon/Icon';

// const NICKNAME = '닉네임';

// export function Component() {
//   const [agreed, setAgreed] = useState(false);
//   const navigate = useNavigate();
//   let nickName = NICKNAME;

//   const handleDeleteAccount = async () => {
//     if (!agreed) {
//       toast.error('안내사항에 동의해주세요.');
//       return;
//     }

//     try {
//       const userId = pb.authStore.model?.id;

//       if (!userId) {
//         throw new Error('로그인된 사용자를 찾을 수 없습니다.');
//       }

//       await pb.collection('users').delete(userId);

//       toast.success('회원 탈퇴가 완료되었습니다.');
//       pb.authStore.clear();
//       navigate('/');
//     } catch (error) {
//       console.error('회원 탈퇴 실패:', error);
//       toast.error('회원 탈퇴에 실패했습니다.');
//     }
//   };

//   return (
//     <div className={S.component}>
//       <HeaderForDetails
//         text="회원 탈퇴"
//         leftIcon={[
//           { iconId: 'left', path: '/main/profile/setting', title: '뒤로가기' },
//         ]}
//       />
//       <div className={S.content__container}>
//         <h2>
//           <span>{nickName}님,</span>
//           <span>정말 탈퇴하시겠어요?</span>
//         </h2>
//         <span className={S.contents}>
//           탈퇴하면 일정 등록, 프로필, 채팅 내역, 에너지, 적립 포인트 등 모든
//           데이터가 삭제되고 어떠한 경우에도 복구할 수 없어요. 또한 계정 삭제 후
//           30일간 다시 가입할 수 없어요.
//         </span>
//         <div className={S.terms__container}>
//           <input
//             type="checkbox"
//             id="terms"
//             checked={agreed}
//             onChange={() => setAgreed((prev) => !prev)}
//             className={S.hiddenCheckbox} // 체크박스는 보이지 않지만 클릭 가능
//           />
//           <label htmlFor="terms" className={S.label}>
//             <Icon id="checkbox" className={agreed ? S.checked : S.unchecked} />
//             안내사항을 모두 확인했으며, 이에 동의합니다.
//           </label>
//         </div>
//       </div>

//       <Button className={S.button} onClick={handleDeleteAccount}>
//         탈퇴하기
//       </Button>
//     </div>
//   );
// }

// export default Component;

// import Button from '@/components/Button/Button';
// import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
// import S from '@/routes/profile/DeleteAccount/DeleteAccount.module.css';
// import pb from '@/api/pb.js';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import Icon from '@/components/Icon/Icon';

// const NICKNAME = '닉네임';

// export function Component() {
//   const [agreed, setAgreed] = useState(false);
//   const navigate = useNavigate();
//   let nickName = NICKNAME;

//   const handleDeleteAccount = async () => {
//     if (!agreed) {
//       toast.error('안내사항에 동의해주세요.');
//       return;
//     }

//     try {
//       const userId = pb.authStore.model?.id;

//       if (!userId) {
//         throw new Error('로그인된 사용자를 찾을 수 없습니다.');
//       }

//       await pb.collection('users').delete(userId);

//       toast.success('회원 탈퇴가 완료되었습니다.');
//       pb.authStore.clear();
//       navigate('/');
//     } catch (error) {
//       console.error('회원 탈퇴 실패:', error);
//       toast.error('회원 탈퇴에 실패했습니다.');
//     }
//   };

//   return (
//     <div className={S.component}>
//       <HeaderForDetails
//         text="회원 탈퇴"
//         leftIcon={[
//           { iconId: 'left', path: '/main/profile/setting', title: '뒤로가기' },
//         ]}
//       />
//       <div className={S.content__container}>
//         <h2>
//           <span>{nickName}님,</span>
//           <span>정말 탈퇴하시겠어요?</span>
//         </h2>
//         <span className={S.contents}>
//           탈퇴하면 일정 등록, 프로필, 채팅 내역, 에너지, 적립 포인트 등 모든
//           데이터가 삭제되고 어떠한 경우에도 복구할 수 없어요. 또한 계정 삭제 후
//           30일간 다시 가입할 수 없어요.
//         </span>
//         <div className={S.terms__container}>
//           <Icon
//             iconId={agreed ? 'checkbox-checked' : 'checkbox-unchecked'}
//             className={S.checkboxIcon}
//             onClick={() => setAgreed((prev) => !prev)}
//           />
//           <label onClick={() => setAgreed((prev) => !prev)}>
//             안내사항을 모두 확인했으며, 이에 동의합니다.
//           </label>
//         </div>
//       </div>
//       <Button className={S.button} onClick={handleDeleteAccount}>
//         탈퇴하기
//       </Button>
//     </div>
//   );
// }

// export default Component;
