import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import { useState } from 'react';
import S from '@/routes/community/component/BtnCount.module.css';

function BtnThumsup() {
  const [countThumsUp, setCountThumsUp] = useState(0);

  const onClickThumsUp = () => {
    setCountThumsUp((prevCount) => prevCount + 1);
    console.log(countThumsUp);
  };
  return (
    <div className={S.component}>
      <Button
        width="16px"
        height="16px"
        color="var(--content-secondary)"
        backgroundColor="transparent"
        onClick={onClickThumsUp}
      >
        <Icon
          id="thumbs-up"
          width={16}
          height={16}
          color="var(--content-secondary)"
        />
      </Button>
      <span>{countThumsUp}</span>
    </div>
  );
}

export default BtnThumsup;
