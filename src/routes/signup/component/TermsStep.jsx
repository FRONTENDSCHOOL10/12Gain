import Button from '@/components/Button/Button';
import { useSignupStore } from '@/stores/route';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

TermsStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function TermsStep({ onSubmit }) {
  const navigate = useNavigate();
  const { agreeToTerms, setAgreeToTerms } = useSignupStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreeToTerms) {
      onSubmit();
    } else {
      alert('이용약관에 동의해주세요.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
          />
          이용약관에 동의합니다.
        </label>
        <Button text="완료" onClick={() => navigate('/Landing/Login')} />
      </form>
    </div>
  );
}

export default TermsStep;
