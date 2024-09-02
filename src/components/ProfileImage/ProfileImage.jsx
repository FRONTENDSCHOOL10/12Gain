import S from '@/components/ProfileImage/ProfileImage.module.css';

import { string, number } from 'prop-types';

ProfileImage.propTypes = {
  url: string.isRequired,
  width: number,
  height: number,
};

function ProfileImage({ url, width = 68, height = 68 }) {
  return (
    <img
      className={S.component}
      src={url}
      alt="프로필"
      width={width}
      height={height}
    />
  );
}

export default ProfileImage;
