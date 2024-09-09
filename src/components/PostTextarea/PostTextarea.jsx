import PropTypes from 'prop-types';
import S from '@/components/PostTextArea/style.module.css';

const PostTextarea = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  disabled = false,
  name,
  maxLength = '2000',
}) => {
  return (
    <div className={S.inputWrapper}>
      <textarea
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        maxLength={maxLength}
      />
      {/* 현재 입력된 글자 수 / 최대 글자 수 표시 */}
      <div className={S.charCount}>
        {value ? value.length : 0}/{maxLength}
      </div>
    </div>
  );
};

PostTextarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  maxLength: PropTypes.number, // maxLength도 PropTypes에 추가
};

export default PostTextarea;
