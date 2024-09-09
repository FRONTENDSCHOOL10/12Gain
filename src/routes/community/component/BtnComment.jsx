import IconButton from '@/components/Button/IconButton';
import S from '@/routes/community/component/BtnCount.module.css';

function BtnComment() {
  return (
    <div className={S.component}>
      <IconButton
        title="댓글 페이지로 이동"
        iconId="comment"
        width={14}
        height={14}
        path="comment"
        iconColor="var(--content-secondary)"
      />
      <span>0</span>
    </div>
  );
}

export default BtnComment;
