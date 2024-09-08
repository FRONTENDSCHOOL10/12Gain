import S from './Comment.module.css'; // CSS 파일을 따로 작성합니다.

const Comment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <article className={S.modalWrapper} onClick={onClose}>
      <div className={S.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={S.closeButton} onClick={onClose}>
          X
        </button>
        <textarea
          placeholder="댓글을 입력하세요..."
          className={S.commentBox}
        ></textarea>
      </div>
    </article>
  );
};

export default Comment;
