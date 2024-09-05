import S from '@/routes/login/style.module.css';
import { useNavigate } from 'react-router-dom';
import { useLoginForm } from '@/stores/route';
import Button from '@/components/Button/Button';
import FormGroup from './component/FormGroup';
import SignupLink from '../landing/component/SignupLink';

function Login() {
  const navigate = useNavigate();
  const isFormValid = useLoginForm((state) => state.isFormValid());
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/home');
    }
  };

  return (
    <div className={S.component}>
      <h1 className="label-lg">이메일과 비밀번호를 입력해 주세요.</h1>
      <form onSubmit={handleSubmit} noValidate>
        <FormGroup />
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
