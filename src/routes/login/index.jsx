import Button from '@/components/Button/Button';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import S from '@/routes/login/style.module.css';
import { useLoginForm } from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';
import SignupLink from '../landing/component/SignupLink';
import EmailInput from './component/EmailInput';
import PasswordInput from './component/PasswordInput';
import pb from '@/api/pb.js';
import { useAuthStore } from '@/stores/form.js';

export function Component() {
  const navigate = useNavigate();
  const { email, password, setEmail, setPassword, isFormValid, clearForm } =
    useLoginForm();

  const { setUser, setToken } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      try {
        const authData = await pb
          .collection('users')
          .authWithPassword(email, password);
        console.log('authData:', authData);

        setUser(authData.record);
        setToken(authData.token);

        console.log('User stored in Zustand:', authData.record);
        console.log('Token stored in Zustand:', authData.token);

        clearForm();
        navigate('/main');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };

  return (
    <div>
      <HeaderForDetails
        leftIcon={[{ iconId: 'left', path: '/', title: '뒤로가기' }]}
      />
      <h2 className={`${S.LoginTitle} label-lg`}>
        이메일과 비밀번호를 입력해 주세요.
      </h2>
      <form className={S.LoginForm} onSubmit={handleSubmit} noValidate>
        <div className={S.InputGroup}>
          <EmailInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className={`${S.button} label-md`}
          disabled={!isFormValid()}
          type="submit"
        >
          로그인
        </Button>
      </form>
      <SignupLink
        onClick={() => navigate('/Landing/SignUp')}
        aria-label="회원가입 페이지로 이동"
      />
    </div>
  );
}
