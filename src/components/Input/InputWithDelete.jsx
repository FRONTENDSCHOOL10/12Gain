import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/Icon/Icon';
import S from '@/components/Icon/style.module.css';

const InputWithDelete = ({
  value,
  onChange,
  placeholder = '',
  onClear,
  type = 'text',
  disabled = false,
  maxLength,
  style,
  className,
  name,
  showClearButton = true,
}) => {
  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <div
      className={`input-container ${className}`}
      style={{ position: 'relative', ...style }}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className="input-field"
        name={name}
        style={{
          width: '100%',
          padding: '12px 40px 12px 24px',
          borderRadius: '24px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          ...style,
        }}
      />
      {showClearButton && value && (
        <button
          type="button"
          onClick={handleClear}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Clear input"
        >
          <Icon id="close" width={16} height={16} />
        </button>
      )}
    </div>
  );
};

InputWithDelete.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  onClear: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']), // 여기서 oneOf로 변경
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  showClearButton: PropTypes.bool,
};

export default InputWithDelete;
