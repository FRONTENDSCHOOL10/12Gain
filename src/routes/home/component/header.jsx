import S from '@/routes/home/component/Header.module.css';
import Icon from '@/components/Icon/Icon';

function Header({ text, iconList }) {
  const leftIcons = iconList.slice(0, 2); // 'left', 'home' 아이콘
  const rightIcon = iconList.slice(2); // 'more' 아이콘

  return (
    <header className={S.component}>
      <div className={S.leftIcons}>
        {leftIcons.map((item, index) => (
          <div key={index}>
            <Icon id={item} />
          </div>
        ))}
      </div>
      <div className={S.rightIcons}>
        {rightIcon.map((item, index) => (
          <div key={index}>
            <Icon id={item} />
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
