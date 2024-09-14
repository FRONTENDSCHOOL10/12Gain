import { useState } from 'react';
import Button from '@/components/Button/Button';
import EmailInput from '@/routes/login/component/EmailInput';
import { useSignupStore } from '@/stores/authStore';
import PropTypes from 'prop-types';
import S from './EmailStep.module.css';
import toast from 'react-hot-toast'; // 사용자 알림
import emailjs from '@emailjs/browser'; // EmailJS 라이브러리
import pb from '@/api/pb'; // 포켓베이스 인스턴스 가져오기

EmailStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

function EmailStep({ onNext }) {
  const { email, setEmail, setVerificationCode } = useSignupStore();
  const [isSubmitting, setIsSubmitting] = useState(false); // 제출 중 상태 추가

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // 제출 시작 시 상태 업데이트

    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    setVerificationCode(verificationCode); // 상태에 인증코드 저장

    try {
      // 포켓베이스에 이메일과 인증코드 저장
      await pb.collection('emailcode').create({
        email,
        code: verificationCode,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
      });

      // 이메일로 인증코드 전송
      await emailjs.send(
        'service_d5zdioj', // EmailJS 서비스 ID
        'template_lytf70a', // 이메일 템플릿 ID
        { email, verificationCode }, // 이메일 템플릿에 전달할 데이터
        'qJ_Qj8NKcIo9gXPmo' // EmailJS 사용자 ID
      );

      toast.success('인증코드를 이메일로 발송했습니다.');
      onNext(); // 다음 단계로 이동
    } catch (error) {
      console.error('인증코드 발송 실패:', error);
      toast.error('인증코드 발송에 실패했습니다. 다시 시도해 주세요.');
      setEmail(''); // 이메일 상태를 빈 문자열로 설정
    } finally {
      setIsSubmitting(false); // 제출 완료 시 상태 업데이트
    }
  };

  // 이메일 유효성에 따른 버튼 비활성화 여부
  const isButtonDisabled =
    !isValidEmail(email) || email.trim() === '' || isSubmitting;

  return (
    <div className={S.Component}>
      <form className={S.EmailStepForm} onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          value={email}
          onChange={handleEmailChange}
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
          {isSubmitting ? '전송중...' : '다음'}
        </Button>
      </form>
    </div>
  );
}

export default EmailStep;
