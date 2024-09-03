import S from '@/routes/profile/component/EditProfile.module.css';

import Header from '../../../components/Header/Header';
import ProfileImage from '@/components/ProfileImage/ProfileImage';
import InputWithDelete from '@/components/Input/InputWithDelete';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import TextArea from '@/components/TextArea/TextArea';

function EditProfile() {
  return (
    <div className={S.component}>
      <Header text="프로필 수정" iconList={['setting']} />
      <div className={S.profile}>
        <ProfileImage url="/profile.png" />
      </div>
      <form action="/">
        <label>
          이름
          <InputWithDelete placeholder="닉네임" name="nickName" />
        </label>
        <div className={S.interest__container}>
          관심 운동 종목
          <Icon id="right" width={16} height={16} />
        </div>
        <label className={S.aboutMe}>
          소개글
          <TextArea
            placeholder="Text"
            name="aboutMe"
            maxLength={180}
            className={S.textarea}
          />
        </label>
      </form>
      <div className={S.button__container}>
        <Button text="저장하기" height="2.8125rem" className={S.button} />
      </div>
    </div>
  );
}

export default EditProfile;
