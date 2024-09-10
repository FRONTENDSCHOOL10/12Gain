import S from '@/components/Confirm/Confirm.module.css';
import Button from '../Button/Button';
import { string } from 'prop-types';

Confirm.propTypes = {
  text: string,
};

function Confirm({ text }) {
  return (
    <div className={S.component}>
      <span>{text}</span>
      <div className={S.button__container}>
        <Button className={S.button__cancel}>취소</Button>
        <Button className={S.button__confirm}>확인</Button>
      </div>
    </div>
  );
}

export default Confirm;
