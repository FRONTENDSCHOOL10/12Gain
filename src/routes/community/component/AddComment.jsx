import IconButton from '@/components/Button/IconButton';
import S from '@/routes/community/component/AddComment.module.css';

function AddComment() {
  return (
    <div className={S.component}>
      <div className={S.input__container}>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="댓글을 작성해 주세요"
        />
        <IconButton title="이모지" iconId="smile" width={20} height={20} />
      </div>
      <IconButton title="댓글 추가하기" iconId="send" width={18} height={18} />
    </div>
  );
}

export default AddComment;
