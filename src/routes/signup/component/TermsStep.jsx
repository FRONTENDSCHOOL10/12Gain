import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import { useSignupStore } from '@/stores/route';

function TermsStep({ onSubmit }) {
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
        <Button />
      </form>
    </div>
  );
}

TermsStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TermsStep;
