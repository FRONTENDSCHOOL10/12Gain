import S from '@/components/TextArea/TextArea2.module.css';
import { string, number, bool } from 'prop-types';
import { useState } from 'react';

function TextArea2({
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
      {showTextLength ? (
        <span>
          {text.length} / {maxLength}
        </span>
      ) : null}
    </div>
  );
}

TextArea2.propTypes = {
  name: string,
  id: string,
  placeholder: string,
  className: string,
  maxLength: number,
  showTextLength: bool,
};

export default TextArea2;
