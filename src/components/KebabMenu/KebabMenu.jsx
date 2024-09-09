import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import S from '@/components/KebabMenu/style.module.css';

function KebabMenu() {
  const onClickMenu = () => {
    console.log('메뉴창 열림');
  };

  return (
    <Button className={S.component} onClick={onClickMenu}>
      <Icon id="more" width={20} height={20} />
    </Button>
  );
}

export default KebabMenu;
