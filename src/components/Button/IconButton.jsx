import S from '@/components/Button/IconButton.module.css';
import Icon from '../Icon/Icon';
import { string, func, number } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

IconButton.propTypes = {
  title: string,
  onClick: func,
  width: number,
  height: number,
  iconColor: string,
  iconId: string.isRequired,
  path: string,
};

function IconButton({
  title,
  onClick,
  width = 16,
  height = 16,
  iconColor = '#101115',
  iconId,
  path,
}) {
  const nav = useNavigate();

  const handleClick = (e) => {
    if (path === '-1') {
      e.preventDefault();
      nav(-1);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      {path ? (
        <NavLink
          to={path !== '-1' ? path : '#'}
          className={S.IconButton}
          title={title}
          onClick={handleClick}
        >
          <Icon id={iconId} width={width} height={height} color={iconColor} />
        </NavLink>
      ) : (
        <button
          className={S.IconButton}
          type="button"
          title={title}
          onClick={onClick}
        >
          <Icon id={iconId} width={width} height={height} color={iconColor} />
        </button>
      )}
    </>
  );
}

const memoizedIconButton = memo(IconButton);

export default memoizedIconButton;
