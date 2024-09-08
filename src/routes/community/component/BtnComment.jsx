import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import { useState } from 'react';
import S from '@/routes/community/component/BtnCount.module.css';
import Comment from './Comment';

function BtnComment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={S.component}>
      <Button className={S.BtnComment} onClick={handleOpenModal}>
        <Icon
          id="comment"
          width={14}
          height={14}
          color="var(--content-secondary)"
        />
      </Button>
      <span>0</span>
      <Comment isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default BtnComment;
