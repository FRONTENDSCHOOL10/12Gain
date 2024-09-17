import S from '@/components/KebabMenu/style.module.css';
import IconButton from '@/components/Button/IconButton';
import Button from '@/components/Button/Button';
import Confirm from '@/components/Confirm/Confirm';

import { useEffect } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { oneOf, bool } from 'prop-types';
import clsx from 'clsx';
import { useKebabMenuStore } from '@/stores/kebabStore';

KebabMenuPost.propTypes = {
  category: oneOf(['appointments', 'feeds']).isRequired,
  categoryText: oneOf(['모임', '게시물']).isRequired,
  chat: bool,
};

function KebabMenuPost({ category, categoryText, chat = false }) {
  const { postId } = useParams();
  const nav = useNavigate();
  const {
    isOptionOpen,
    currentUser,
    postWriter,
    showConfirm,
    confirmText,
    fetchUser,
    fetchPostWriter,
    handleOpenMenu,
    handleCloseMenu,
    handleDeleteClick,
    handleReportClick,
    handleLeaveChatClick,
    handleConfirm,
    handleCancel,
  } = useKebabMenuStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    fetchPostWriter(category, postId);
  }, [fetchPostWriter, category, postId]);

  const isAuthor = currentUser === postWriter;

  return (
    <div className={clsx(S.component, 'button-icon')}>
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
            {chat ? (
              <div className={clsx(S.option__wrapper)}>
                <Button
                  className={clsx(S.option__button, S.option__buttonRed)}
                  onClick={() => handleLeaveChatClick(isAuthor)}
                >
                  채팅방 나가기
                </Button>
                <Button
                  className={clsx(S.option__button, S.option__buttonCancel)}
                  onClick={handleCloseMenu}
                >
                  취소
                </Button>
              </div>
            ) : isAuthor ? (
              <div className={clsx(S.option__wrapper)}>
                <NavLink to={'/main'} className={clsx(S.option__button)}>
                  수정하기
                </NavLink>
                <Button
                  className={clsx(S.option__button, S.option__buttonRed)}
                  onClick={() => handleDeleteClick(categoryText)}
                >
                  삭제하기
                </Button>
                <Button
                  className={clsx(S.option__button, S.option__buttonCancel)}
                  onClick={handleCloseMenu}
                >
                  취소
                </Button>
              </div>
            ) : (
              <div className={clsx(S.option__wrapper)}>
                <Button
                  className={clsx(S.option__button, S.option__buttonRed)}
                  onClick={() => handleReportClick(categoryText)}
                >
                  신고하기
                </Button>
                <Button
                  className={clsx(S.option__button, S.option__buttonCancel)}
                  onClick={handleCloseMenu}
                >
                  취소
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
      {showConfirm && (
        <article>
          <Confirm
            text={confirmText}
            onClick={() =>
              handleConfirm(category, postId, categoryText, nav, isAuthor)
            }
            onCancel={handleCancel}
          />
        </article>
      )}
    </div>
  );
}

export default KebabMenuPost;
