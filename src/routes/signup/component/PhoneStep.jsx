import Button from '@/components/Button/Button';
import InputWithDelete from '@/components/Input/InputWithDelete';
import { useSignupStore } from '@/stores/route';
import PropTypes from 'prop-types';

PhoneStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

function PhoneStep({ onNext }) {
  const { phoneNumber, setPhoneNumber, verificationCode, setVerificationCode } =
    useSignupStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 인증 번호 확인 로직 추가
    onNext();
  };

  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <form onSubmit={handleSubmit}>
        <InputWithDelete
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="paragraph-md"
          placeholder="휴대폰 번호"
        />
        <InputWithDelete
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="paragraph-md"
          placeholder="인증번호"
        />
        <Button text="인증문자 받기" />
        <Button text="다음" />
      </form>
    </div>
  );
}

export default PhoneStep;
