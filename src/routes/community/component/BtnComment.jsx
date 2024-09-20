import IconButton from '@/components/Button/IconButton';
import S from '@/routes/community/component/BtnCount.module.css';
import { func, array } from 'prop-types';

BtnComment.propTypes = {
  onClick: func,
  commentList: array,
};

function BtnComment({ onClick, commentList, count }) {
  return (
    <div className={S.component} onClick={onClick}>
      <IconButton
        title="댓글 보이기"
        iconId="comment"
        width={14}
        height={14}
        iconColor="var(--content-secondary)"
      />
      <span>{count}</span>
    </div>
  );
}

export default BtnComment;
