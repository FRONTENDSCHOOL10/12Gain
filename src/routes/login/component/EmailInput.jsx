import InputWithDelete from '@/components/Input/InputWithDelete';
import S from '@/components/Input/style.module.css';
import Tooltip from '@/components/Tooltip/Tooltip';
import { useLoginForm } from '@/stores/authStore';

function EmailInput() {
  const { email, setEmail } = useLoginForm();
  const isEmailValid = useLoginForm((state) => state.isEmailValid);
  return (
    <div>
      <Tooltip text="이메일 입력" position="bottom">
        <InputWithDelete
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`paragraph-md ${email && !isEmailValid ? S.error : ''}`}
          placeholder="이메일"
          error={email !== '' && !isEmailValid}
          hasInput={email !== '' && isEmailValid}
          ariaLabel="이메일 입력"
        />
      </Tooltip>
    </div>
  );
}

export default EmailInput;
