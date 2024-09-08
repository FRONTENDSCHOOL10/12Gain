import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import TextArea from '@/components/TextArea/TextArea';
import S from '@/routes/community/component/CreateFeedPage.module.css';

function CreateFeedPage() {
  return (
    <form className={S.component}>
      <label htmlFor="createFeed" className="sr-only">
        커뮤니티 게시물 생성
      </label>
      <TextArea
        id="createFeed"
        name="createFeed"
        placeholder="내용을 입력해주세요"
        maxLength={1000}
      />
      <div className={S.BtnAddPicture}>
        <Button width="100%" height="45px" backgroundColor="pink">
          <Icon id="camera" width={20} height={20} />
        </Button>
        <p>
          사진추가<span>(선택)</span>
        </p>
      </div>
      <Button text={'완료'} />
    </form>
  );
}

export default CreateFeedPage;
