import S from '@/routes/profile/EditProfile/EditProfile.module.css';

import ProfileImage from '@/components/ProfileImage/ProfileImage';
import InputWithDelete from '@/components/Input/InputWithDelete';
import Button from '@/components/Button/Button';
import TextArea from '@/components/TextArea/TextArea';
import IconButton from '@/components/Button/IconButton';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import ImageUpload from '@/components/ImageUpload/ImageUpload';
import Icon from '@/components/Icon/Icon';
import { useFeedData } from '@/stores/form';
import Tooltip from '@/components/Tooltip/Tooltip';
import { useKebabMenuStore } from '@/stores/kebabStore';
import { useUserProfile } from '@/stores/users';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export function Component() {
  const {
    userData,
    setNickname,
    setIntroduction,
    fetchUserProfile,
    updateProfile,
    tempInterest,
    resetTempInterest,
  } = useUserProfile();

  const { fetchUser, currentUser } = useKebabMenuStore();

  // 사진 업로드
  const { imageData, updateImageData } = useFeedData();
  const handleImageName = (e) => {
    let image = [];

    for (let file of e.target.files) {
      image = [...image, file];
    }

    updateImageData(image);
  };
  const fileName = imageData.map((data) => data.name);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   const dataCollection = Object.entries(feedData);
  //   const auth = JSON.parse(localStorage.getItem('pocketbase_auth')).model;
  //   formData.append('writer', auth.id);
  //   dataCollection.forEach((data) => formData.append(data[0], data[1]));
  //   imageData.forEach((data) => formData.append('image', data));

  //   setIsLoading(true);
  //   await pb
  //     .collection('feeds')
  //     .create(formData)
  //     .then(() => {
  //       resetFeedData();
  //       resetImageData();

  //       setIsLoading(false);
  //     });

  //   navigate('/main/community');
  // };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    fetchUserProfile(currentUser);
  }, [fetchUserProfile, currentUser]);

  const handleSave = async () => {
    try {
      await updateProfile(currentUser, {
        nickname: userData.nickname,
        introduction: userData.introduction,
        interest: tempInterest || userData.interest,
      });
      resetTempInterest();
      Navigate(-1);
      toast.success('저장이 완료되었습니다.');
    } catch (error) {
      console.error('Failed to save profile:', error);
      toast.error('저장 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

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
        <ProfileImage url={userData.avatarUrl} nickname={userData.nickname} />
        <div className={S.profile__upload}>
          <Tooltip text="프로필 수정하기" position="right">
            <ImageUpload
              onChange={handleImageName}
              imageData={fileName}
              className={S.upload__label}
            >
              <Icon id="pencil" width={10} height={10} />
            </ImageUpload>
          </Tooltip>
        </div>
      </section>

      <form action="/">
        <label>
          이름
          <InputWithDelete
            placeholder="닉네임"
            name="nickName"
            value={userData.nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
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
            value={userData.introduction}
            onChange={(e) => setIntroduction(e.target.value)}
          />
        </section>
      </form>
      <Button className="button-main" onClick={handleSave}>
        저장하기
      </Button>
    </div>
  );
}
