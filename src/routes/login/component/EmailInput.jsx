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
          onChange={onChange}
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
