import S from '@/routes/home/component/AttendPost.module.css';
import { string, number } from 'prop-types';
import ProfileImage from '@/components/ProfileImage/ProfileImage';

AttendPost.propTypes = {
  nickName: string.isRequired,
  pop: number,
  imageWidth: number,
  imageHeight: number,
};

function AttendPost({ nickName, pop, imageWidth, imageHeight }) {
  return (
    <div className={S.component}>
      <ProfileImage
        url="/profile.png"
        width={imageWidth}
        height={imageHeight}
      />
      <span>{nickName}</span>
      {/* <span>{pop}</span> */}
    </div>
  );
}
export default AttendPost;
