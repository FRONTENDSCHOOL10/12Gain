import S from '@/components/Button/IconButton.module.css';
import Icon from '../Icon/Icon';
import { string, func, number } from 'prop-types';

IconButton.propTypes = {
  title: string.isRequired,
  onClick: func,
  width: number,
  height: number,
  iconColor: string,
  iconId: string.isRequired,
};

function IconButton({
  title,
  onClick,
  width = 16,
  height = 16,
  iconColor = '#101115',
  iconId,
}) {
  return (
    <button
      className={S.component}
      type="button"
      title={title}
      onClick={onClick}
    >
      <Icon id={iconId} width={width} height={height} color={iconColor} />
    </button>
  );
}

export default IconButton;
