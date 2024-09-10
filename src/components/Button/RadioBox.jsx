import S from '@/components/Button/RadioBox.module.css';
import { array, func } from 'prop-types';

RadioBox.propTypes = {
  list: array,
  onChange: func,
};

function RadioBox({ list, onChange }) {
  return (
    <div className={S.component}>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <label>
              <input
                className={S.input}
                type="radio"
                name="interest"
                value={item}
                onChange={onChange}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioBox;
