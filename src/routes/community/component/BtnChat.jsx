import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import { useState } from 'react';
import S from '@/routes/community/component/BtnCount.module.css';

function BtnChat() {
  const [countChat, setCountChat] = useState(0);

  const onClickChat = () => {
    setCountChat((prevCount) => prevCount + 1);
    console.log(countChat);
    // 댓글 리스트 개수 만큼 count되도록 변경해야함.
  };
  return (
    <div className={S.component}>
      <Button
        width="18px"
        height="18px"
        color="var(--content-secondary)"
        backgroundColor="transparent"
        onClick={onClickChat}
      >
        <Icon
          id="comment"
          width={18}
          height={18}
          color="var(--content-secondary)"
        />
      </Button>
      <span>{countChat}</span>
    </div>
  );
}

export default BtnChat;
