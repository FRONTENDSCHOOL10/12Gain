import InputWithDelete from '@/components/Input/InputWithDelete';
import S from '@/components/Input/style.module.css';
import { useLoginForm } from '@/stores/route';

function EmailInput() {
  const { email, setEmail } = useLoginForm();
  const isEmailValid = useLoginForm((state) => state.isEmailValid);
  return (
    <div>
      <InputWithDelete
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`paragraph-md ${email && !isEmailValid ? S.error : ''}`}
        placeholder="이메일"
        error={email !== '' && !isEmailValid}
        hasInput={email !== '' && isEmailValid}
        ariaLabel="이메일 주소 입력"
      />
    </div>
  );
}

export default EmailInput;
