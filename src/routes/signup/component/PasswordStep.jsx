import Button from '@/components/Button/Button';
import PasswordInput from '@/routes/login/component/PasswordInput';
import { useSignupStore } from '@/stores/route';
import PropTypes from 'prop-types';
import S from './PasswordStep.module.css';

PasswordStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

function PasswordStep({ onNext }) {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isPasswordMatching,
    isNextEnabled,
  } = useSignupStore();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPasswordMatching()) {
      onNext();
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className={S.Component}>
      <form className={S.PasswordStepForm} onSubmit={handleSubmit}>
        <div className={S.InputGroup}>
          <PasswordInput
            showPassword={true}
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호"
            ariaLabel="비밀번호 입력"
            isValid={true}
          />
          <PasswordInput
            showPassword={true}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="비밀번호를 확인"
            ariaLabel="비밀번호 확인 입력"
            isValid={isPasswordMatching()}
          />
        </div>
        <Button
          text="다음"
          height="2.8125rem"
          type="submit"
          disabled={!isNextEnabled()}
        />
      </form>
    </div>
  );
}

export default PasswordStep;
