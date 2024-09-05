import Button from '../Button/Button';
import Icon from '../Icon/Icon';

function KebabMenu() {
  const onClickMenu = () => {
    console.log('메뉴창 열림');
  };

  return (
    <Button
      width="20px"
      height="20px"
      backgroundColor="transparent"
      onClick={onClickMenu}
    >
      <Icon id="more" width={20} height={20} />
    </Button>
  );
}

export default KebabMenu;
