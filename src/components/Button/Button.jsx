import { string, bool, func, node } from 'prop-types';
import S from './Button.module.css';

function Button({ type, className, disabled = false, onClick, children }) {
  return (
    <div className={S.Button}>
      <button
        type={type}
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  type: string,
  className: string,
  disabled: bool,
  onClick: func,
  children: node,
};

export default Button;
