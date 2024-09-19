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
      <section className={S.profile}>
        <ProfileImage url="/profile.png" />
      </section>
      <form action="/">
        <label>
          이름
          <InputWithDelete placeholder="닉네임" name="nickName" />
        </label>
        <section className={S.interest__container}>
          관심 운동 종목
          <IconButton iconId="right" path="interest" />
        </section>

        <section className={S.aboutMe}>
          <h3>
            <span>소개글</span>
            <span className={S.aboutMe__textCheck}>0/180</span>
          </h3>
          <TextArea
            placeholder="Text"
            id="aboutMe"
            name="aboutMe"
            maxLength={180}
            className={S.textarea}
            showTextLength={false}
          />
        </section>
      </form>
      <Button
        className="button-main"
        onClick={() => {
          handleClick(-1);
        }}
      >
        저장하기
      </Button>
    </div>
  );
}
