import S from '@/components/TextArea/style.module.css';

import { string, number, bool, func } from 'prop-types';

function TextArea({
  value,
  name,
  id,
  placeholder,
  className,
  maxLength = 1000,
  onChange,
  showTextLength = 'true',
}) {
  return (
    <label className={S.component} htmlFor={id}>
      <textarea
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        maxLength={maxLength}
        onChange={onChange}
      ></textarea>
      {showTextLength && (
        <span className={S.charCount}>
          {value ? value.length : 0}/{maxLength}
        </span>
      )}
    </label>
  );
}

TextArea.propTypes = {
  value: string,
  name: string,
  id: string,
  placeholder: string,
  className: string,
  maxLength: number,
  onChange: func,
  showTextLength: bool,
};

export default TextArea;
