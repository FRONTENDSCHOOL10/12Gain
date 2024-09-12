import S from '@/components/KebabMenu/style.module.css';
import IconButton from '@/components/Button/IconButton';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import pb from '@/api/pb';
import Button from '../Button/Button';
import { useCallback } from 'react';

function KebabMenu({ postAuthorId }) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await pb.authStore.model;
      setCurrentUser(user);
    };

    fetchUser();
  }, []);

  const handleOpenMenu = useCallback(() => {
    setIsOptionOpen((open) => !open);
    console.log('옵션창 열렸습니당?');
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsOptionOpen((close) => !close);
    console.log('옵션창 닫혔습니당?');
  }, []);

  const isAuthor = currentUser && currentUser.id === postAuthorId;

  return (
    <div className="button-icon">
      <IconButton
        title="옵션 선택"
        iconId="more"
        width={20}
        height={20}
        onClick={handleOpenMenu}
      />
      {isOptionOpen && (
        <div className={S.option}>
          <div className={S.option__content}>
            {isAuthor ? (
              <div>
                <NavLink to="my edit post or feed" className={S.option__button}>
                  수정하기
                </NavLink>
                <Button className={S.option__button}>삭제하기</Button>
                <Button className={S.option__button} onClick={handleCloseMenu}>
                  취소
                </Button>
              </div>
            ) : (
              <div>
                <Button className={S.option__button}>신고하기</Button>
                <Button className={S.option__button} onClick={handleCloseMenu}>
                  취소
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default KebabMenu;
