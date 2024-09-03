import React from 'react';
import PropTypes from 'prop-types';
// import Icon from '../Icon/Icon';
import Icon from '@/components/Icon/Icon';
import S from '@/components/Icon/style.module.css';

const InputWithDelete = ({
  value, // 입력 필드의 현재 값
  onChange, // 입력 필드 값이 변경될 때 호출되는 함수
  placeholder = '', // 입력 필드에 표시되는 플레이스홀더 텍스트
  onClear, // 입력 필드를 지울 때 호출되는 함수
  type = 'text', // 입력 필드의 유형 (예: 'text', 'password', 등)
  disabled = false, // 입력 필드를 비활성화할지 여부
  maxLength, // 입력 필드에 입력 가능한 최대 문자 수
  style, // 입력 필드와 컨테이너의 인라인 스타일
  className, // 추가 CSS 클래스
  name, // 입력 필드의 이름
  showClearButton = true, // 입력 필드에 지우기 버튼을 표시할지 여부
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
  type: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  showClearButton: PropTypes.bool,
};

export default InputWithDelete;
