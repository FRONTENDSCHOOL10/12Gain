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

function NewPost() {
  const navigate = useNavigate();

  const { postData, updatePostData } = usePostData();

  const handleData = (e) => {
    const { name, value } = e.target;

    updatePostData({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 서버로 데이터 전송
    await pb.collection('appointments').create(postData);

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
              onChange={handleData}
            />
          </label>

          <label>
            <PostTextarea
              placeholder="내용을 입력해주세요"
              name="description"
              value={postData.description}
              onChange={handleData}
            />
          </label>

          <div className={S.category}>
            카테고리를 선택해주세요
            <button
              type="button"
              onClick={() => navigate('category')}
              className={S.category__button}
            >
              <Icon id="right" width={16} height={16} />
            </button>
          </div>

          <div className={S.image__upload}>
            <button
              type="button"
              // onClick={() => handleClick('imageUpload')} // 이미지 업로드 기능 추가 필요
              className={S.image__upload__button}
            >
              <Icon id="camera"></Icon>
              사진 추가(선택)
            </button>
          </div>

          <label>
            <ChoiceInput
              memberCount={postData.memberCount}
              date={postData.date}
              time={postData.time}
              location={postData.location}
              onChange={handleData}
            />
          </label>
          <div className={S.attend_button}>
            <Button className={S.button} type="submit">
              완료
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewPost;
