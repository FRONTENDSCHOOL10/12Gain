import S from '@/routes/landing/component/SignupLink.module.css';
import { func } from 'prop-types';

function SignupLink({ onClick }) {
  return (
    <div className={S.Component}>
      <p className="paragraph-sm">
        아직 회원이 아니신가요?{' '}
        <a className="paragraph-underline" onClick={onClick}>
          회원가입
        </a>{' '}
      </p>
    </div>
  );
}

SignupLink.proTypes = {
  onclick: func,
};

export default SignupLink;
