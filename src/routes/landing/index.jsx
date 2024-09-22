import Button from '@/components/Button/Button';
import S from '@/routes/landing/style.module.css';
import { useNavigate } from 'react-router-dom';
import LandingLogo from './component/LandingLogo';
import SignupLink from './component/SignupLink';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className={S.Component}>
      <LandingLogo />
      <Button
        className={`${S.button} label-md`}
        onClick={() => navigate('Login')}
      >
        시작하기
      </Button>
      <SignupLink onClick={() => navigate('landing/SignUp')} />
    </div>
  );
}

export default Landing;
