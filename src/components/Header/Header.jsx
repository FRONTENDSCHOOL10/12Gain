import S from '@/components/Header/style.module.css';

import Icon from '@/components/Icon/Icon';
import { string, array } from 'prop-types';
import IconButton from '../Button/IconButton';

Header.propTypes = {
  text: string,
  iconList: array,
};

function Header({ text, iconList }) {
  return (
    <header className={S.component}>
      <h1>{text ? text : <Icon id="Logo_s" width={52} />}</h1>
      <ul className={S.icons__container}>
        {iconList?.map((item, index) => (
          <li key={index}>
            <IconButton
              iconId={item.iconId}
              title={item.iconId}
              path={item.path}
            />
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Header;
