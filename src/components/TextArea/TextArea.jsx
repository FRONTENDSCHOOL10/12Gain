import S from '@/components/TextArea/style.module.css';
import { string, number, bool } from 'prop-types';
import { useState } from 'react';

function TextArea({
  name,
  id,
  placeholder,
  className,
  maxLength,
  showTextLength = 'true',
}) {
  const [text, setText] = useState('');

  const handleUpdateText = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  return (
    <div className={S.component}>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        maxLength={maxLength}
        onChange={handleUpdateText}
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
};

export default TextArea;
