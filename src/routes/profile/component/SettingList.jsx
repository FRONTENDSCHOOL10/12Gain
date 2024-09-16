import S from '@/routes/profile/component/SettingList.module.css';
import IconButton from '@/components/Button/IconButton';
import { func, number, oneOfType, string } from 'prop-types';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기

SettingList.propTypes = {
  text: string.isRequired,
  key: oneOfType([string, number]),

  onClick: func,
  iconColor: string,
};

function SettingList({ text, key, onClick }) {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClick = () => {
    // 탈퇴하기를 클릭했을 때 탈퇴 페이지로 이동
    if (text === '탈퇴하기') {
      navigate('/main/profile/setting/deleteAccount');
    } else if (onClick) {
      onClick(); // 다른 경우에는 전달된 onClick 호출
    }
  };

  return (
    <li className={S.component} key={key}>
      {text}
      <IconButton iconId={'right'} onClick={handleClick} />
    </li>
  );
}

export default SettingList;
