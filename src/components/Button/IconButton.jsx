import S from '@/components/Button/IconButton.module.css';
import Icon from '../Icon/Icon';
import { string, func, number } from 'prop-types';
import { NavLink } from 'react-router-dom';

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
  return (
    <>
      {path ? (
        <NavLink to={path} className={S.IconButton} title={title}>
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

export default IconButton;
