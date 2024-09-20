// 확인
import S from '@/routes/profile/EditInterest/EditInterest.module.css';
import Button from '@/components/Button/Button';
import Checkbox from '@/components/Button/Checkbox';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from '@/stores/users';
import { useState, useEffect } from 'react';

const INTEREST = [
  '필라테스',
  '헬스',
  '수영',
  '탁구',
  '배드민턴',
  '테니스',
  '농구',
  '축구',
  '요가',
  '발레',
  '클라이밍',
  '러닝',
  '기타',
];

export function Component() {
  const navigate = useNavigate();
  const { userData, setTempInterest } = useUserProfile();
  const [selectedInterests, setSelectedInterests] = useState([]);

  useEffect(() => {
    setSelectedInterests(userData.interest || []);
  }, [userData.interest]);

  const handleInterestToggle = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSave = () => {
    setTempInterest(selectedInterests);
    navigate(-1);
  };

  return (
    <div className={S.component}>
      <HeaderForDetails
        text="관심 운동 선택"
        leftIcon={[
          { iconId: 'left', path: '/main/profile/edit', title: '뒤로가기' },
        ]}
      />
      <div className={S.contents}>
        <h2 className={S.headline}>관심 있는 운동 종목을 선택해주세요.</h2>
        <ul>
          {INTEREST.map((item, index) => (
            <li key={index}>
              <Checkbox
                text={item}
                checked={selectedInterests.includes(item)}
                onChange={() => handleInterestToggle(item)}
              />
            </li>
          ))}
        </ul>
      </div>

      <Button className={S.button} onClick={handleSave}>
        저장하기
      </Button>
    </div>
  );
}
