import Button from '@/components/Button/Button';
import { useSignupStore } from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import S from './TermsStep.module.css';
import TermsItem from './TermsItem';
import toast from 'react-hot-toast';
import pb from '@/api/pb.js'; // 포켓베이스 인스턴스 가져오기

TermsStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function TermsStep({ onSubmit }) {
  const navigate = useNavigate();
  const {
    agreeToTerms,
    email,
    password,
    passwordConfirm,
    nickname,
    setAgreeToTerms,
    setUser,
    setToken,
  } = useSignupStore();

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

  const handleSignUp = async () => {
    const requiredTerms = ['terms', 'privacy', 'age'];
    if (requiredTerms.every((term) => agreeToTerms[term])) {
      try {
        // 포켓베이스에 회원가입 요청
        const userData = await pb.collection('users').create({
          email: email,
          emailVisibility: true,
          password: password,
          passwordConfirm: passwordConfirm,
          nickname: nickname,
        });

        console.log('회원가입 완료:', userData);
        // setUser(userData); // Zustand에 사용자 정보 저장
        // setToken(userData.token); // 상태에 토큰 저장

        // onSubmit();
        navigate('/Login');
        toast('회원가입이 완료되었습니다!', {
          icon: '🎉',
        });
      } catch (error) {
        console.error('회원가입 실패:', error);
        toast.error('회원가입에 실패했습니다.');
      }
    } else {
      toast.error('필수 약관에 모두 동의해주세요.');
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
      <Button type="button" onClick={handleSignUp} className={S.button}>
        완료
      </Button>
    </div>
  );
}

export default TermsStep;
