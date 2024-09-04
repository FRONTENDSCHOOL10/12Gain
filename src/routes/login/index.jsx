import S from '@/routes/login/style.module.css';
import LoginInput from './component/LoginInput';
import Button from '@/components/Button/Button';
import SignupLink from '../landing/component/SignupLink';

function Login() {
  return (
    <div className={S.component}>
      <p className="label-lg">이메일과 비밀번호를 입력해 주세요.</p>
      <LoginInput />
      <Button text="로그인" height="2.8125rem" disabled />
      <SignupLink />
    </div>
  );
}

export default Login;
