import S from '@/routes/profile/EditInterest/EditInterest.module.css';

import Button from '@/components/Button/Button';
import Checkbox from '@/components/Button/Checkbox';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import { useNavigate } from 'react-router-dom';

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
  const handleClick = useNavigate();

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
              <Checkbox text={item} />
            </li>
          ))}
        </ul>
      </div>

      <Button
        className={S.button}
        onClick={() => {
          handleClick(-1);
        }}
      >
        저장하기
      </Button>
    </div>
  );
}
