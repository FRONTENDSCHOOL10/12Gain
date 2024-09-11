import S from '@/routes/post/component/NewPost.module.css';

import PostInput from '@/components/PostInput/PostInput';
import PostTextarea from '@/components/PostTextarea/PostTextarea';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import ChoiceInput from '@/components/ChoiceInput/ChoiceInput';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import { useNavigate } from 'react-router-dom';
import { usePostData } from '@/stores/form';
import pb from '@/api/pb';
import IconButton from '@/components/Button/IconButton';
import ImageUpload from '@/components/ImageUpload/ImageUpload';

function NewPost() {
  const navigate = useNavigate();

  const { postData, updatePostData, resetPostData, updateImageData } =
    usePostData();

  // postData store에 데이터 추가
  const handlePostData = (e) => {
    const { name, value } = e.target;

    updatePostData({ [name]: value });
  };

  const formData = new FormData();

  // 이미지를 폼 데이터에 추가
  const handleImageForm = (e) => {
    for (let file of e.target.files) {
      formData.append('image', file);
    }
  };

  // 파일명 imageData store에 추가
  const handleImageName = (e) => {
    let filenames = [];

    for (let file of e.target.files) {
      filenames = [...filenames, file.name];
    }
    updateImageData(filenames);
  };

  const handleImage = (e) => {
    handleImageForm(e);
    handleImageName(e);
  };

  // form 완료 버튼
  const handleSubmit = async (e) => {
    e.preventDefault();

    // formData에 postData 입력
    const dataCollection = Object.entries(postData);
    dataCollection.forEach((data) => formData.append(data[0], data[1]));

    // 서버로 데이터 전송
    await pb.collection('appointments').create(formData);

    resetPostData;

    // 이전 페이지로 이동
    navigate(-1);
  };

  return (
    <>
      <HeaderForDetails
        text="모임 생성하기"
        leftIcon={[{ iconId: 'left', path: '/main', title: '뒤로가기' }]}
      />
      <div className={S.component}>
        <form onSubmit={handleSubmit}>
          <label>
            <PostInput
              placeholder="제목을 입력해주세요"
              name="title"
              value={postData.title}
              onChange={handlePostData}
            />
          </label>

          <label>
            <PostTextarea
              placeholder="내용을 입력해주세요"
              name="description"
              value={postData.description}
              onChange={handlePostData}
            />
          </label>

          <div className={S.category}>
            카테고리를 선택해주세요
            <IconButton iconId="right" path="/main/home/new/post/category" />
          </div>

          <div className={S.image__upload}>
            <ImageUpload onChange={handleImage}>
              <Icon id="camera" />
              사진추가 <p>(선택)</p>
            </ImageUpload>
          </div>

          <label>
            <ChoiceInput
              memberCount={postData.memberCount}
              date={postData.date}
              time={postData.time}
              location={postData.location}
              onChange={handlePostData}
            />
          </label>
          <Button className={S.button} type="submit">
            완료
          </Button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
