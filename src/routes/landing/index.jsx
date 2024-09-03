import { useNavigate } from 'react-router-dom';
import S from '@/routes/landing/style.module.css';
import Button from '@/components/Button/Button';
import LandingLogo from './component/LandingLogo';
import SignupLink from './component/signupLink';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className={S.component}>
      <LandingLogo />
      <Button
        text="시작하기"
        height="2.25rem"
        onClick={() => navigate('Login')}
      />
      <SignupLink />
    </div>
  );
}

export default Landing;
