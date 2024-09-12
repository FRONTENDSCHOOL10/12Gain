import { useEffect, useRef } from 'react'; // useRef 추가
import PropTypes from 'prop-types';
import Icon from '@/components/Icon/Icon';
import S from '@/components/Input/style.module.css';

const InputWithDelete = ({
  value,
  onChange,
  placeholder = '',
  onClear,
  type = 'text',
  disabled = false,
  maxLength,
  className,
  name,
  showClearButton = true,
  error = false,
  onBlur,
  hasInput = false,
  ariaLabel,
  title = '입력 필드',
  clearButtonTitle = '입력 내용 지우기',
  ...restProps
}) => {
  const inputRef = useRef(null); // useRef 사용

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && !e.shiftKey) {
        inputRef.current.value = ''; // inputRef를 사용하여 input 참조
      }
    };

    inputRef.current?.addEventListener('keyup', handleKey);

    return () => {
      inputRef.current?.removeEventListener('keyup', handleKey);
    };
  }, []);

  const handleClear = (e) => {
    e.preventDefault();
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  return (
    <div className={S.inputWrapper}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className={`
          ${S.component} 
          ${className} 
          ${error ? S.error : ''} 
          ${hasInput ? S.hasInput : ''}
        `}
        name={name}
        onBlur={onBlur}
        aria-label={ariaLabel}
        title={title} // title 속성 추가
        ref={inputRef} // ref 속성 추가
        {...restProps}
      />
      {showClearButton && value && value.length > 0 && (
        <button
          type="reset"
          onClick={handleClear}
          className={S.clearButton}
          tabIndex={-1}
          aria-label="입력 내용 지우기"
          title={clearButtonTitle} // title 속성 추가
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
  onClear: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  name: PropTypes.string,
  showClearButton: PropTypes.bool,
  error: PropTypes.bool,
  hasInput: PropTypes.bool,
  onBlur: PropTypes.func,
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
  clearButtonTitle: PropTypes.string,
};

export default InputWithDelete;
