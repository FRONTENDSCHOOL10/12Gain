import { string, bool, func } from 'prop-types';
import S from './Button.module.css';

function Button({
  text,
  width = '18.5rem',
  height = '2.25rem',
  disabled = false,
  onClick,
}) {
  return (
    <button
      className={S.Button}
      style={{ width, height }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: string.isRequired,
  width: string,
  height: string,
  disabled: bool,
  onClick: func,
};

export default Button;
