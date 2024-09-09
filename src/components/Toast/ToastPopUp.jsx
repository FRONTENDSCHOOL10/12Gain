import toast from 'react-hot-toast';
import Icon from '../Icon/Icon';
import S from './CustomToast.module.css';

const CustomToast = ({ text, iconId }) => {
  return (
    <div className={S.toastContainer}>
      <Icon
        id={iconId}
        className={`${S.icon} ${
          iconId === 'error' ? S.errorIcon : S.successIcon
        }`}
      />
      <span className={S.text}>{text}</span>
    </div>
  );
};

export const showToast = (text, iconId = 'circle-check') => {
  return toast.custom((t) => <CustomToast text={text} iconId={iconId} />);
};

export default CustomToast;
