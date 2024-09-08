import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import EmailInput from '@/routes/login/component/EmailInput';
import { useLoginForm } from '@/stores/route';
import S from './EmailStep.module.css';

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
    <div className={S.component}>
      <form className={S.EmailStepForm} onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          required
        />
        <Button
          text="다음"
          height="2.8125rem"
          disabled={isButtonDisabled}
          type="submit"
        />
      </form>
    </div>
  );
}

EmailStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default EmailStep;
