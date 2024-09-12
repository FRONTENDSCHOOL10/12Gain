import S from '@/routes/postDetails/postDetails.module.css';

import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import DetailItem from '@/components/DetailItem/DetailItem';
import PostManager from '@/components/PostManager/PostManager';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import usePostStore from '@/stores/postStore';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import PostDetailImage from './component/postDetailsImage';

export function Component() {
  const navigate = useNavigate();

  const { posts, isLoading } = usePostStore();
  const { postId } = useParams();

  const post = posts.filter((item) => item.id === postId)[0];

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <HeaderForDetails
        leftIcon={[{ iconId: 'left', path: '/main', title: '뒤로가기' }]}
        rightIcon={[
          { iconId: 'home', path: '/main', title: 'home' },
          { iconId: 'more', path: '/', title: 'more' },
        ]}
      />
      <article className={S.component}>
        {post.image.length > 0 && <PostDetailImage />}
        <div className={S.main}>
          <p className={S.main_title}>{post.title}</p>
          <div className={S.main_detail}>
            <DetailItem label="종목" value={post.category} />
            <DetailItem label="장소" value={post.location} />
            <DetailItem label="일시" value={post.date} />
            <DetailItem label="인원" value={'1'} />
          </div>
        </div>

        <div className={S.sub}>
          <p className={S.sub_title}>내용</p>
          <div className={S.sub_description}>{post.description}</div>
        </div>

        <div className={S.attend}>
          <div className={S.attend_member}>
            <span className={S.attend_member_pop}>
              참여멤버 {1}명
              <span className={S.attend_member_pop_max}>
                / {post.memberCount}명
              </span>
            </span>
            <div className={S.attend_member_info}>
              <PostManager
                nickName="사용자"
                pop={'1'}
                imageWidth={44}
                imageHeight={44}
              />
            </div>
          </div>
        </div>

        <div className={S.attend_button}>
          <Button className={S.button} onClick={() => navigate('join')}>
            참여하기
          </Button>
        </div>
      </article>
    </>
  );
}
