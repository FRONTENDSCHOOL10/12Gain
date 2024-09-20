import S from '@/components/Confirm/Confirm.module.css';
import Button from '../Button/Button';
import { string, func } from 'prop-types';

Confirm.propTypes = {
  text: string,
  onClick: func,
  onCancel: func,
};

function Confirm({ text, onClick, onCancel }) {
  return (
    <div className={S.component}>
      <span>{text}</span>
      <div className={S.button__container}>
        <Button className={S.button__cancel} onClick={onCancel}>
          취소
        </Button>
        <Button className={S.button__confirm} onClick={onClick}>
          확인
        </Button>
      </div>
    </div>
  );
}

export default Confirm;
