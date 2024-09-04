import S from '@/components/Button/ButtonCategory.module.css';

import { string } from 'prop-types';

ButtonCategory.propTypes = {
  text: string.isRequired,
};

function ButtonCategory({ text }) {
  return (
    <div className={S.component}>
      <input type="checkbox" id={text} name="interest" />
      <label htmlFor={text}>{text}</label>
    </div>
  );
}

export default ButtonCategory;
