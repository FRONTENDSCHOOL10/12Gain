import InputWithDelete from '@/components/Input/InputWithDelete';
import { useLoginForm } from '@/stores/route';

function PasswordInput() {
  const { password, setPassword } = useLoginForm();
  const isPasswordValid = useLoginForm((state) => state.isPasswordValid);
  return (
    <div>
      <InputWithDelete
        type="password"
        value={password}
        className="paragraph-md"
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
        error={password !== '' && !isPasswordValid}
        hasInput={password !== ''}
        ariaLabel="비밀번호 입력"
      />
    </div>
  );
}

export default PasswordInput;
