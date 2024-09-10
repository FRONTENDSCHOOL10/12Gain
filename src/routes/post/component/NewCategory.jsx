import S from '@/routes/post/component/NewCategory.module.css';

import Button from '@/components/Button/Button';
import RadioBox from '@/components/Button/RadioBox';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import { useNavigate } from 'react-router-dom';

const CATEGORY = [
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

function NewCategory() {
  const handleClick = useNavigate();

  return (
    <div className={S.component}>
      <HeaderForDetails
        text="운동 종목 선택"
        leftIcon={[
          { iconId: 'left', path: '/main/home/new/post', title: '뒤로가기' },
        ]}
      />
      <div className={S.contents}>
        <h2 className={S.headline}>운동 종목을 선택해주세요.</h2>
        <RadioBox list={CATEGORY} />
      </div>
      <div className={S.button__container}>
        <Button
          className={S.button}
          onClick={() => {
            handleClick(-1);
          }}
        >
          저장하기
        </Button>
      </div>
    </div>
  );
}

export default NewCategory;
