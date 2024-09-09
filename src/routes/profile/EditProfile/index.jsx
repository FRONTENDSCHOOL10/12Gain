import S from '@/routes/profile/EditProfile/EditProfile.module.css';

import ProfileImage from '@/components/ProfileImage/ProfileImage';
import InputWithDelete from '@/components/Input/InputWithDelete';
import Button from '@/components/Button/Button';
import TextArea from '@/components/TextArea/TextArea';
import IconButton from '@/components/Button/IconButton';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';

import { useNavigate } from 'react-router-dom';

export function Component() {
  const handleClick = useNavigate();

  return (
    <div className={S.component}>
      <HeaderForDetails
        text="프로필 수정"
        leftIcon={[
          { iconId: 'left', path: '/main/profile', title: '뒤로가기' },
        ]}
        rightIcon={[
          { iconId: 'setting', path: '/main/profile/setting', title: '설정' },
        ]}
      />
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
          <IconButton iconId="right" path="interest" />
        </div>

        <label className={S.aboutMe}>
          <span>소개글</span>
          <span className={S.aboutMe__textCheck}>0/180</span>
          <TextArea
            placeholder="Text"
            name="aboutMe"
            maxLength={180}
            className={S.textarea}
            showTextLength={false}
          />
        </label>
      </form>
      <Button
        className={S.button}
        onClick={() => {
          handleClick(-1);
        }}
      >
        저장하기
      </Button>
    </div>
  );
}
