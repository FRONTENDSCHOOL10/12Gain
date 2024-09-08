import IconButton from '@/components/Button/IconButton';

import S from '@/routes/profile/component/SettingList.module.css';
import { func, number, oneOfType, string } from 'prop-types';

SettingList.propTypes = {
  text: string.isRequired,
  key: oneOfType([string, number]),

  onClick: func,
  iconColor: string,
};

function SettingList({ text, key, onClick }) {
  return (
    <li className={S.component} key={key}>
      {text}
      <IconButton iconId={'right'} onClick={onClick} />
    </li>
  );
}

export default SettingList;
