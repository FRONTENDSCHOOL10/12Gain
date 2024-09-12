import Button from '@/components/Button/Button';
import InputWithDelete from '@/components/Input/InputWithDelete';
import { useSignup } from '@/stores/authStore';
import PropTypes from 'prop-types';
import S from './PhoneStep.module.css';

PhoneStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

function PhoneStep({ onNext }) {
  const { phoneNumber, setPhoneNumber, verificationCode, setVerificationCode } =
    useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className={S.Component}>
      <form onSubmit={handleSubmit}>
        <div className={S.InputGroup}>
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
        </div>
        <p className={`${S.PhoneNotice} paragraph-sm`}>
          어떤 경우에도 타인에게 공유하지 마세요!
        </p>
        <Button className={`${S.messageButton} label-md`}>인증문자 받기</Button>
        <a className={`${S.PhoneMessage} paragraph-underline`}>
          인증문자가 오지 않아요?
        </a>
        <Button type="submit" className={`${S.button} label-md`}>
          다음
        </Button>
      </form>
    </div>
  );
}

export default PhoneStep;
