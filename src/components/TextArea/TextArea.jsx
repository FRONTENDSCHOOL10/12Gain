import S from '@/components/TextArea/style.module.css';
import { number } from 'prop-types';
import { string } from 'prop-types';

TextArea.propTypes = {
  name: string,
  id: string,
  placeholder: string,
  width: string,
  height: string,
  maxLength: number,
};

function TextArea({
  name,
  id,
  placeholder,
  width = '18rem',
  height = '10.75rem',
  maxLength,
}) {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      className={S.component}
      style={{ width, height }}
      maxLength={maxLength}
    ></textarea>
  );
}

export default TextArea;
