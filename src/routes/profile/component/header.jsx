import S from '@/routes/profile/component/Header.module.css';

import Icon from '@/components/Icon/Icon';
import { string } from 'prop-types';

Header.propTypes = {
  text: string,
};

function Header({ text }) {
  return (
    <header className={S.component}>
      <h1>{text}</h1>
      <ul>
        <li>
          <Icon id="setting" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
