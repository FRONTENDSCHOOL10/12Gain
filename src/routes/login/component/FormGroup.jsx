import S from './FormGroup.module.css';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

function FormGroup() {
  return (
    <div className={S.component}>
      <EmailInput />
      <PasswordInput />
    </div>
  );
}

export default FormGroup;
