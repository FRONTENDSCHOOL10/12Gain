import S from '@/components/TextArea/style.module.css';
import { func } from 'prop-types';
import { string, number, bool } from 'prop-types';
import { useState } from 'react';

function TextArea({
  name,
  id,
  placeholder,
  className,
  maxLength,
  showTextLength = 'true',
  label,
  value,
  onChange,
}) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
      onChange(e);
    }
  };

  return (
    <div className={S.component}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
      ></textarea>
      {showTextLength && (
        <span>
          {text.length} / {maxLength}
        </span>
      )}
    </div>
  );
}

TextArea.propTypes = {
  name: string,
  id: string,
  placeholder: string,
  className: string,
  maxLength: number,
  showTextLength: bool,
  label: string,
  value: string,
  onChange: func,
};

export default TextArea;
