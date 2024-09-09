import S from '@/components/Button/Checkbox.module.css';

import { string } from 'prop-types';

Checkbox.propTypes = {
  text: string.isRequired,
};

function Checkbox({ text }) {
  return (
    <div className={S.component}>
      <input type="checkbox" id={text} name="interest" />
      <label htmlFor={text}>{text}</label>
    </div>
  );
}

export default Checkbox;
