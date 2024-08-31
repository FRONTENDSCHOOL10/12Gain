import { number } from 'prop-types';
import { string } from 'prop-types';

Icon.propTypes = {
  id: string.isRequired,
  width: number,
  height: number,
};

function Icon({ id, width = 20, height = 20 }) {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`/stack.svg#${id}`} />
    </svg>
  );
}

export default Icon;
