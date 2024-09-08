import ProfileImage from '@/components/ProfileImage/ProfileImage';
import S from '@/routes/chatList/component/Chat.module.css';
import { func } from 'prop-types';

Chat.propTypes = {
  onClick: func,
};

function Chat({ onClick }) {
  return (
    <div className={S.component} onClick={onClick}>
      <ProfileImage url="/profile.png" width={44} height={44} />
      <div className={S.chat__container}>
        <div className={S.chat__container__header}>
          <h3>채팅방 이름</h3>
          <span>몇분 전</span>
        </div>
        <span className={S.chat__container__message}>메세지</span>
      </div>
    </div>
  );
}

export default Chat;
