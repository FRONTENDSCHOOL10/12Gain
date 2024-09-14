import { useState } from 'react';
import Button from '@/components/Button/Button';
import InputWithDelete from '@/components/Input/InputWithDelete';
import { useSignupStore } from '@/stores/authStore';
import PropTypes from 'prop-types';
import S from './NicknameStep.module.css';
import pb from '@/api/pb.js'; // 포켓베이스 인스턴스 가져오기
import toast from 'react-hot-toast';

NicknameStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

function NicknameStep({ onNext }) {
  const { nickname, setNickname } = useSignupStore(); // 전역 상태의 nickname과 setNickname 가져오기
  const [localNickname, setLocalNickname] = useState(''); // 로컬 상태로 닉네임 관리

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 로컬 상태의 닉네임이 비어 있는지 확인
    if (!localNickname.trim()) {
      toast.error('닉네임을 입력해주세요.');
      return;
    }

    try {
      // 전역 상태에 닉네임 저장
      setNickname(localNickname);

      // 포켓베이스에 닉네임을 저장하는 작업 수행 (옵션)
      // 예시:
      // await pb.collection('users').update(user.id, { nickname: localNickname });

      toast.success('닉네임이 설정되었습니다.');
      onNext(); // 다음 단계로 이동
    } catch (error) {
      console.error('닉네임 설정 실패:', error);
      toast.error('닉네임 설정에 실패했습니다.');
    }
  };

  return (
    <div className={S.Component}>
      <form onSubmit={handleSubmit}>
        <div className={S.InputGroup}>
          <InputWithDelete
            value={localNickname} // 로컬 상태로 닉네임을 관리
            onChange={(e) => setLocalNickname(e.target.value)} // 로컬 상태 업데이트
            className="paragraph-md"
            placeholder="닉네임"
          />
        </div>
        <Button type="submit" className={`${S.button} label-md`}>
          다음
        </Button>
      </form>
    </div>
  );
}

export default NicknameStep;
