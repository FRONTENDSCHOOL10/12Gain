import { string, bool, func, object } from 'prop-types';
import S from './Button.module.css';

function Button({
  text,
  width = '18.5rem',
  height = '2.25rem',
  disabled = false,
  onClick,
  children,
}) {
  return (
    <button
      className={S.Button}
      style={{ width, height }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

Button.propTypes = {
  text: string,
  width: string,
  height: string,
  disabled: bool,
  onClick: func,
  children: object,
};

export default Button;
