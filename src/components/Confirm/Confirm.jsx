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
        <Button
          text="취소"
          backgroundColor="var(--content-tertiary)"
          color="var(--black)"
        ></Button>
        <Button text="확인"></Button>
      </div>
    </div>
  );
}

export default Confirm;
