import S from '@/routes/profile/component/header.module.css';

import Icon from '@/components/Icon/Icon';
import { string } from 'prop-types';

Header.propTypes = {
  text: string,
};

function Header({ text }) {
  return (
    <header className={S.component}>
      <h1>
        <Icon id="Logo_s" width={100} />
      </h1>
      <ul>
        <li>
          <Icon id="search" />
        </li>
        <li>
          <Icon id="chat" />
        </li>
        <li>
          <Icon id="setting" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
