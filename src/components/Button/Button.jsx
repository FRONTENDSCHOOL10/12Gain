import { string, func, node, oneOf } from 'prop-types';
import S from './Button.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

function Button({
  path,
  className,
  title,
  type = 'button',
  onClick,
  children,
}) {
  return (
    <div className={S.Button}>
      {path ? (
        <NavLink
          to={path}
          className={clsx(S.Button, className)}
          title={title}
          onClick={onClick}
        >
          {children}
        </NavLink>
      ) : (
        <button
          className={clsx(S.Button, className)}
          type={type}
          title={title}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </div>
  );
}

Button.propTypes = {
  path: string,
  className: string,
  title: string,
  type: oneOf(['button', 'submit', 'reset']),
  onClick: func,
  children: node,
};

export default Button;
