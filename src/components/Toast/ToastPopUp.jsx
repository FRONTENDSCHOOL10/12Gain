import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import S from './ReusableToast.module.css';

ToastPopUp.propTypes = {
  icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
};

ToastPopUp.defaultProps = {
  variant: 'default',
};

const ToastPopUp = ({ icon: Icon, text }) => {
  const toastContent = (
    <div className={S.toast}>
      <div className={S.content}>
        {Icon && <Icon className={`${S.icon} ${iconColorClass}`} />}
        <span className={S.text}>{text}</span>
      </div>
    </div>
  );

  return toastContent;
};

ToastPopUp.show = (icon, text, variant = 'default') => {
  toast.custom(() => <ToastPopUp icon={icon} text={text} variant={variant} />);
};

export default ToastPopUp;
