import AddComment from '../component/AddComment';
import AddCommentProfile from '../component/AddCommentProfile';
import S from './CommentPage.module.css';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';

const Comment = () => {
  return (
    <>
      <main>
        <section className={S.Comment__list}>
          {/* <p className={S.Comment__list__empty}>아직 댓글이 없습니다.</p> */}
          <AddCommentProfile nickName="닉네임" />
        </section>
        <section>
          <AddComment />
        </section>
      </main>
      <HeaderForDetails
        text="댓글"
        leftIcon={[{ iconId: 'left', path: '/community', title: '뒤로가기' }]}
      />
    </>
  );
};

export default Comment;
