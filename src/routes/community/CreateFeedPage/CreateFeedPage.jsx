import Button from '@/components/Button/Button';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import Icon from '@/components/Icon/Icon';
import TextArea from '@/components/TextArea/TextArea';
import S from '@/routes/community/CreateFeedPage/CreateFeedPage.module.css';

function CreateFeedPage() {
  return (
    <>
      <HeaderForDetails
        text="피드 생성"
        leftIcon={[
          { iconId: 'left', path: '/main/community', title: '뒤로가기' },
        ]}
      />
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
          <Button className={S.BtnAddPicture__Button}>
            <Icon id="camera" width={20} height={20} />
            <p>
              사진추가<span>(선택)</span>
            </p>
          </Button>
        </div>
        <Button type="submit" className={S.CreateFeedPage__Button}>
          완료
        </Button>
      </form>
    </>
  );
}

export default CreateFeedPage;
