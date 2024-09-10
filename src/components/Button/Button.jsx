import { string, func, node, oneOf } from 'prop-types';
import S from './Button.module.css';

function Button({ type, className, onClick, children }) {
  return (
    <div className={S.Button}>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  type: oneOf(['button', 'submit', 'reset']),
  className: string,
  onClick: func,
  children: node,
};

export default Button;
