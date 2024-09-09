import Button from '@/components/Button/Button';
import { useSignupStore } from '@/stores/route';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import S from './TermsStep.module.css';
import TermsItem from './TermsItem';
import ToastPopUp from '@/components/Toast/ToastPopUp';

TermsStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function TermsStep({ onSubmit }) {
  const navigate = useNavigate();
  const { agreeToTerms, setAgreeToTerms } = useSignupStore();

  const toggleTerm = (key) => {
    setAgreeToTerms((prev) => {
      const newTerms = { ...prev };
      newTerms[key] = !newTerms[key];

      if (key === 'all') {
        Object.keys(newTerms).forEach((k) => {
          newTerms[k] = newTerms.all;
        });
      } else {
        const requiredTerms = ['terms', 'privacy', 'age'];
        newTerms.all = requiredTerms.every((term) => newTerms[term]);
      }

      return newTerms;
    });
  };

  const terms = [
    {
      key: 'all',
      text: '아래 내용에 전체 동의합니다.',
      showArrow: false,
      isAllAgree: true,
    },
    { key: 'terms', text: '이용약관 동의 (필수)', showArrow: true },
    { key: 'privacy', text: '개인정보 수집·이용 동의 (필수)', showArrow: true },
    { key: 'age', text: '본인은 만 14세 이상입니다. (필수)', showArrow: true },
  ];

  const handleNavigation = () => {
    const requiredTerms = ['terms', 'privacy', 'age'];
    if (requiredTerms.every((term) => agreeToTerms[term])) {
      onSubmit();
      navigate('/Landing/Login');
    } else {
      ToastPopUp.show('필수 약관에 모두 동의해주세요.', { variant: 'error' });
    }
  };

  return (
    <div>
      <h2 className="sr-only">이용 약관</h2>
      <ul className={S.termsList}>
        {terms.map((term) => (
          <TermsItem
            key={term.key}
            text={term.text}
            isChecked={agreeToTerms[term.key] || false}
            onChange={() => toggleTerm(term.key)}
            showArrow={term.showArrow}
            isAllAgree={term.isAllAgree}
          />
        ))}
      </ul>
      <Button text="완료" onClick={handleNavigation} />
    </div>
  );
}

export default TermsStep;
