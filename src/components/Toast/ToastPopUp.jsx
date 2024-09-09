import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import S from './ToastPopup.module.css';

const ToastPopUp = ({ icon: Icon, text, variant }) => {
  const iconColorClass = variant === 'error' ? S.iconError : S.iconDefault;
  const textColorClass = variant === 'error' ? S.textError : S.textDefault;

  return (
    <div className={S.toast}>
      <div className={S.content}>
        {Icon && <Icon className={`${S.icon} ${iconColorClass}`} />}
        <span className={`label-sm ${textColorClass}`}>{text}</span>
      </div>
    </div>
  );
};

ToastPopUp.propTypes = {
  icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'error']),
};

ToastPopUp.defaultProps = {
  variant: 'default',
};

const showToast = (text, options = {}) => {
  const { icon, variant = 'default' } = options;
  toast.custom(() => <ToastPopUp icon={icon} text={text} variant={variant} />);
};

ToastPopUp.show = showToast;

export default ToastPopUp;
