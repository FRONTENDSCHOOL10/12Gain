// import InputWithDelete from '@/components/Input/InputWithDelete';
// import S from '@/components/Input/style.module.css';
// import Tooltip from '@/components/Tooltip/Tooltip';
// import { useLoginForm } from '@/stores/authStore';

// function EmailInput() {
//   const { email, setEmail } = useLoginForm();
//   const isEmailValid = useLoginForm((state) => state.isEmailValid);
//   return (
//     <div>
//       <Tooltip text="이메일 입력" position="bottom">
//         <InputWithDelete
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className={`paragraph-md ${email && !isEmailValid ? S.error : ''}`}
//           placeholder="이메일"
//           error={email !== '' && !isEmailValid}
//           hasInput={email !== '' && isEmailValid}
//           ariaLabel="이메일 입력"
//         />
//       </Tooltip>
//     </div>
//   );
// }

// export default EmailInput;

// EmailInput.js
import InputWithDelete from '@/components/Input/InputWithDelete';
import S from '@/components/Input/style.module.css';
import Tooltip from '@/components/Tooltip/Tooltip';
import { useLoginForm } from '@/stores/authStore';

function EmailInput({ type, value, onChange, placeholder, required }) {
  const { email, setEmail } = useLoginForm();
  const isEmailValid = useLoginForm((state) => state.isEmailValid);

  return (
    <div>
      <Tooltip text="이메일 입력" position="bottom">
        <InputWithDelete
          type={type}
          value={value}
          onChange={onChange} // onChange가 제대로 전달되는지 확인
          className={`paragraph-md ${value && !isEmailValid ? S.error : ''}`}
          placeholder="이메일"
          error={value !== '' && !isEmailValid}
          hasInput={value !== '' && isEmailValid}
          ariaLabel="이메일 입력"
          required={required}
        />
      </Tooltip>
    </div>
  );
}

export default EmailInput;
