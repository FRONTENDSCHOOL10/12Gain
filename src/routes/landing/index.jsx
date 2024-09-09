import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import S from '@/routes/landing/style.module.css';
import { useNavigate } from 'react-router-dom';
import LandingLogo from './component/LandingLogo';
import SignupLink from './component/signupLink';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className={S.Component}>
      <LandingLogo />
      <Tooltip text="로그인" position="top">
        <Button
          className={`${S.button} label-md`}
          onClick={() => navigate('Login')}
        >
          시작하기
        </Button>
      </Tooltip>
      <SignupLink onClick={() => navigate('landing/SignUp')} />
    </div>
  );
}

export default Landing;
