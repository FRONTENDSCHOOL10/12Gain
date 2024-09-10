import S from '@/components/Button/Checkbox.module.css';

import { string } from 'prop-types';

Checkbox.propTypes = {
  text: string.isRequired,
};

function Checkbox({ text }) {
  const handleInterestFilter = (e) => {
    console.log(e.target.value, e.target.checked);
  };

  return (
    <div className={S.component}>
      <input
        type="checkbox"
        id={text}
        name="interest"
        value={text}
        onChange={handleInterestFilter}
      />
      <label htmlFor={text}>{text}</label>
    </div>
  );
}

export default Checkbox;
