import S from '@/routes/profile/component/Header.module.css';

import Icon from '@/components/Icon/Icon';

function Header() {
  return (
    <header className={S.component}>
      <h1>프로필</h1>
      <ul>
        <li>
          <Icon id="setting" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
