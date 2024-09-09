import PropTypes from 'prop-types';
import S from '@/components/PostInput/style.module.css';

const PostInput = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  disabled = false,
  name,
}) => {
  return (
    <div className={S.inputWrapper}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
      />
    </div>
  );
};

PostInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

export default PostInput;
