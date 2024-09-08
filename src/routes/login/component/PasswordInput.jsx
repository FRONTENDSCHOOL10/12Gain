import InputWithDelete from '@/components/Input/InputWithDelete';
import PropTypes from 'prop-types';

function PasswordInput({
  showPassword = false,
  value,
  onChange,
  placeholder = '비밀번호',
  ariaLabel = '비밀번호 입력',
  isValid = true,
}) {
  return (
    <div>
      <InputWithDelete
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        className="paragraph-md"
        placeholder={placeholder}
        error={value !== '' && !isValid}
        hasInput={value !== ''}
        ariaLabel={ariaLabel}
      />
    </div>
  );
}

PasswordInput.propTypes = {
  showPassword: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  isValid: PropTypes.bool,
};

export default PasswordInput;
