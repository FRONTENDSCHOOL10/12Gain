import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import S from '@/routes/community/component/BtnCount.module.css';
import { useNavigate } from 'react-router-dom';

function BtnComment() {
  const navigate = useNavigate();

  return (
    <div className={S.component}>
      <Button className={S.BtnComment} onClick={() => navigate('comment')}>
        <Icon
          id="comment"
          width={14}
          height={14}
          color="var(--content-secondary)"
        />
      </Button>
      <span>0</span>
    </div>
  );
}

export default BtnComment;
