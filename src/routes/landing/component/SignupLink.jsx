import { useNavigate } from 'react-router-dom';

function SignupLink() {
  const navigate = useNavigate();
  return (
    <div>
      <p>아직 회원이 아니신가요?</p>
      <a onClick={() => navigate('SignUp')}>회원가입</a>
    </div>
  );
}

export default SignupLink;
