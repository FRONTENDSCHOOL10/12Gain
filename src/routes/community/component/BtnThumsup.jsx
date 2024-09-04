import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import { useState } from 'react';
import S from './BtnCount.module.css';

function BtnThumsup() {
  const [countThumsUp, setCountThumsUp] = useState(0);

  const onClickThumsUp = () => {
    setCountThumsUp((prevCount) => prevCount + 1);
    console.log(countThumsUp);
  };
  return (
    <div className={S.component}>
      <Button
        width="20px"
        height="20px"
        color="var(--content-secondary)"
        backgroundColor="transparent"
        onClick={onClickThumsUp}
      >
        <Icon
          id="thumbs-up"
          width={20}
          height={20}
          color="var(--content-secondary)"
        />
      </Button>
      <span>{countThumsUp}</span>
    </div>
  );
}

export default BtnThumsup;
