import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import { useSignupStore } from '@/stores/route';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailStep from './component/EmailStep';
import PasswordStep from './component/PasswordStep';
import PhoneStep from './component/PhoneStep';
import ProgressBar from './component/ProgressBar';
import SignUpLogo from './component/SignUpLogo';
import TermsStep from './component/TermsStep';

export function Component() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const signupState = useSignupStore();

  const totalSteps = 4;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));

  const handleSubmit = () => {
    console.log('회원가입 완료:', signupState);
    navigate('/login');
  };

  return (
    <div>
      <HeaderForDetails
        leftIcon={[{ iconId: 'left', path: '/', title: '뒤로가기' }]}
      />
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      <SignUpLogo />
      <div>
        {step === 1 && <EmailStep onNext={nextStep} />}
        {step === 2 && <PasswordStep onNext={nextStep} />}
        {step === 3 && <PhoneStep onNext={nextStep} />}
        {step === 4 && <TermsStep onSubmit={handleSubmit} />}
      </div>
    </div>
  );
}
