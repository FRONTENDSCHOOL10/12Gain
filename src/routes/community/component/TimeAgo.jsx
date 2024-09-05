import { string } from 'prop-types';

function TimeAgo({ time }) {
  return (
    <span style={{ color: 'var(--content-secondary)' }}>{time}시간 전</span>
  );
}

TimeAgo.propTypes = {
  time: string,
};

export default TimeAgo;
