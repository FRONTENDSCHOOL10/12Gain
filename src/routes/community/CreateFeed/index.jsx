import S from '@/routes/community/CreateFeed/CreateFeed.module.css';

import pb from '@/api/pb';
import Button from '@/components/Button/Button';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import Icon from '@/components/Icon/Icon';
import ImageUpload from '@/components/ImageUpload/ImageUpload';
import TextArea from '@/components/TextArea/TextArea';
import { useFeedData } from '@/stores/form';
import { useNavigate } from 'react-router-dom';

export function Component() {
  const navigate = useNavigate();

  const { feedData, updateFeedData } = useFeedData();

  const handleFeedData = (e) => {
    const { name, value } = e.target;

    updateFeedData({ [name]: value });
  };

  const formData = new FormData();

  const handleImageData = (e) => {
    for (let file of e.target.files) {
      formData.append('image', file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // formData에 feedData 입력
    const dataCollection = Object.entries(feedData);
    dataCollection.forEach((data) => formData.append(data[0], data[1]));

    // 서버로 데이터 전송
    await pb.collection('feeds').create(formData);

    // 생성된 모임 상세 페이지로 이동
    navigate('/main/community');
  };

  return (
    <>
      <HeaderForDetails
        text="피드 생성"
        leftIcon={[
          { iconId: 'left', path: '/main/community', title: '뒤로가기' },
        ]}
      />
      <form className={S.component} onSubmit={handleSubmit}>
        <div className={S.textarea}>
          <TextArea
            value={feedData.content}
            name="content"
            id="content"
            placeholder="내용을 입력해주세요"
            maxLength={1000}
            onChange={handleFeedData}
          />
        </div>

        <div className={S.image__upload}>
          <ImageUpload
            onChange={handleImageData}
            imageData={feedData.imageData}
          >
            <Icon id="camera" />
            사진추가 <p>(선택)</p>
          </ImageUpload>
        </div>

        <Button type="submit" className={S.button}>
          완료
        </Button>
      </form>
    </>
  );
}
