import { useNavigate } from 'react-router-dom';
import S from '@/routes/landing/component/SignupLink.module.css';

function SignupLink() {
  const navigate = useNavigate();
  return (
    <div className={S.component}>
      <p className="paragraph-sm">
        아직 회원이 아니신가요?{' '}
        <a className="paragraph-underline" onClick={() => navigate('SignUp')}>
          회원가입
        </a>{' '}
      </p>
    </div>
  );
}

export default SignupLink;
