import IconButton from '@/components/Button/IconButton';
import S from '@/routes/chatList/component/SendMessage.module.css';

function SendMessage() {
  return (
    <div className={S.component}>
      <IconButton title="더보기" iconId="plus" width={20} height={20} />
      <div className={S.input__container}>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="메세지 보내기"
        />
        <IconButton title="이모지" iconId="smile" width={20} height={20} />
      </div>
      <IconButton title="메세지 보내기" iconId="send" width={18} height={18} />
    </div>
  );
}

export default SendMessage;
