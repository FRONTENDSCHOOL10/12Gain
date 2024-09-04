import S from '@/components/HeaderForDetails/HeaderForDetails.module.css';
import { array } from 'prop-types';
import { string } from 'prop-types';
import Icon from '../Icon/Icon';

HeaderForDetails.propTypes = {
  text: string,
  leftIcon: array.isRequired,
  rightIcon: array,
};

function HeaderForDetails({ text, leftIcon, rightIcon }) {
  return (
    <header className={S.component}>
      <ul className={S.icons__container}>
        {leftIcon?.map((item, index) => (
          <li key={index}>
            <Icon id={item} />
          </li>
        ))}
      </ul>
      <h1>{text ? text : undefined}</h1>
      <ul className={S.icons__container}>
        {rightIcon?.map((item, index) => (
          <li key={index}>
            <Icon id={item} />
          </li>
        ))}
      </ul>
    </header>
  );
}

export default HeaderForDetails;
