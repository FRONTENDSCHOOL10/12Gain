import S from '@/components/HeaderForDetails/HeaderForDetails.module.css';
import { array } from 'prop-types';
import { string } from 'prop-types';
import IconButton from '../Button/IconButton';

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
            <IconButton
              iconId={item.iconId}
              title={item.title}
              path={item.path}
            />
          </li>
        ))}
      </ul>
      {text && <h1>{text}</h1>}
      <ul className={S.icons__container}>
        {rightIcon?.map((item, index) => (
          <li key={index}>
            <IconButton
              iconId={item.iconId}
              title={item.title}
              path={item.path}
            />
          </li>
        ))}
      </ul>
    </header>
  );
}

export default HeaderForDetails;
