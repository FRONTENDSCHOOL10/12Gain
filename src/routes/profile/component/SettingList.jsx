import IconButton from '@/components/Button/IconButton';

import S from '@/routes/profile/component/SettingList.module.css';
import { func, number, oneOfType, string } from 'prop-types';

SettingList.propTypes = {
  text: string.isRequired,
  key: oneOfType([string, number]),

  title: string.isRequired,
  onClick: func,
  iconColor: string,
};

function SettingList({ text, key, title, onClick }) {
  return (
    <li className={S.component} key={key}>
      {text}
      <IconButton iconId={'right'} title={title} onClick={onClick} />
    </li>
  );
}

export default SettingList;
