import S from '@/components/Icon/style.module.css';

import { number } from 'prop-types';
import { string } from 'prop-types';

Icon.propTypes = {
  id: string.isRequired,
  width: number,
  height: number,
  text: string,
};

function Icon({ id, width = 20, height = 20, text = null }) {
  return (
    <div className={S.component}>
      <svg width={width} height={height}>
        <use xlinkHref={`/stack.svg#${id}`} />
      </svg>
      <span>{text}</span>
    </div>
  );
}

export default Icon;
