import Button from '@/components/Button/Button';
import EmailInput from '@/routes/login/component/EmailInput';
import { useLoginForm } from '@/stores/route';
import PropTypes from 'prop-types';
import S from './EmailStep.module.css';

EmailStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

function EmailStep({ onNext }) {
  const { email, setEmail, isEmailValid } = useLoginForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && email.trim() !== '') {
      onNext();
    }
  };

  const isButtonDisabled = !isEmailValid || email.trim() === '';

  return (
    <div className={S.Component}>
      <form className={S.EmailStepForm} onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          required
        />
        <Button
          disabled={isButtonDisabled}
          type="submit"
          className={`${
            isButtonDisabled ? S.disabledButton : S.button
          } label-md`}
        >
          다음
        </Button>
      </form>
    </div>
  );
}

export default EmailStep;
