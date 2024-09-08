import Button from '@/components/Button/Button';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import S from '@/routes/login/style.module.css';
import { useLoginForm } from '@/stores/route';
import { useNavigate } from 'react-router-dom';
import SignupLink from '../landing/component/SignupLink';
import EmailInput from './component/EmailInput';
import PasswordInput from './component/PasswordInput';

function Login() {
  const navigate = useNavigate();
  const { email, password, setEmail, setPassword, isFormValid, clearForm } =
    useLoginForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form submitted with:', { email, password });
      clearForm();
      navigate('/home');
    }
  };

  return (
    <div className={S.component}>
      <HeaderForDetails leftIcon={['left']} />
      <h2 className={`${S.LoginTitle} label-lg`}>
        이메일과 비밀번호를 입력해 주세요.
      </h2>
      <form className={S.LoginForm} onSubmit={handleSubmit} noValidate>
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text="로그인"
          height="2.8125rem"
          disabled={!isFormValid}
          onClick={() => navigate('/home')}
          type="submit"
        />
      </form>
      <SignupLink
        onClick={() => navigate('/Landing/SignUp')}
        aria-label="회원가입 페이지로 이동"
      />
    </div>
  );
}

export default Login;
