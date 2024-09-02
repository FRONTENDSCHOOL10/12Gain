import React from 'react';
import PropTypes from 'prop-types';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.94028 8.00012L13.1403 3.80679C13.2658 3.68125 13.3363 3.51099 13.3363 3.33346C13.3363 3.15592 13.2658 2.98566 13.1403 2.86012C13.0147 2.73459 12.8445 2.66406 12.667 2.66406C12.4894 2.66406 12.3192 2.73459 12.1936 2.86012L8.00029 7.06012L3.80695 2.86012C3.68142 2.73459 3.51115 2.66406 3.33362 2.66406C3.15608 2.66406 2.98582 2.73459 2.86028 2.86012C2.73475 2.98566 2.66422 3.15592 2.66422 3.33346C2.66422 3.51099 2.73475 3.68125 2.86028 3.80679L7.06029 8.00012L2.86028 12.1935C2.7978 12.2554 2.7482 12.3292 2.71436 12.4104C2.68051 12.4916 2.66309 12.5788 2.66309 12.6668C2.66309 12.7548 2.68051 12.8419 2.71436 12.9232C2.7482 13.0044 2.7978 13.0781 2.86028 13.1401C2.92226 13.2026 2.99599 13.2522 3.07723 13.2861C3.15847 13.3199 3.24561 13.3373 3.33362 13.3373C3.42163 13.3373 3.50876 13.3199 3.59 13.2861C3.67124 13.2522 3.74498 13.2026 3.80695 13.1401L8.00029 8.94012L12.1936 13.1401C12.2556 13.2026 12.3293 13.2522 12.4106 13.2861C12.4918 13.3199 12.5789 13.3373 12.667 13.3373C12.755 13.3373 12.8421 13.3199 12.9233 13.2861C13.0046 13.2522 13.0783 13.2026 13.1403 13.1401C13.2028 13.0781 13.2524 13.0044 13.2862 12.9232C13.3201 12.8419 13.3375 12.7548 13.3375 12.6668C13.3375 12.5788 13.3201 12.4916 13.2862 12.4104C13.2524 12.3292 13.2028 12.2554 13.1403 12.1935L8.94028 8.00012Z"
              fill="#101115"
            />
          </svg>
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
