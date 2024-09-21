import S from '@/routes/postDetails/postDetails.module.css';

import Button from '@/components/Button/Button';
import DetailItem from '@/components/DetailItem/DetailItem';
import PostManager from '@/components/PostManager/PostManager';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import { useParams } from 'react-router-dom';
import PostDetailImage from './component/PostDetailsImage';
import { usePostData } from '@/stores/form';
import { useEffect } from 'react';
import { useJoin } from '@/stores/join';
import { useUsers } from '@/stores/users';
import { Link } from 'react-router-dom';
import pb from '@/api/pb';
import { useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import toast from 'react-hot-toast';

export function Component() {
  const { postId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const { postData, fetchPost } = usePostData();
  const { joinData, fetchJoinData, updateJoinData } = useJoin();
  const { users, fetchUsers } = useUsers();

  const auth = JSON.parse(localStorage.getItem('pocketbase_auth'));
  const user = auth.model.id;

  useEffect(() => {
    setIsLoading(true);
    fetchPost(postId);
    fetchJoinData(postId);
  }, [fetchPost, fetchJoinData, postId]);

  const members = joinData.map((item) => item.user_id);
  const filter = members.map((item) => `id = "${item}"`).join(' || ');

  useEffect(() => {
    fetchUsers(filter);
    setIsLoading(false);
  }, [fetchUsers, filter]);

  const handleClick = async () => {
    const data = {
      user_id: user,
      appointment_id: postData.id,
    };

    try {
      setIsLoading(true);
      await pb.collection('join').create(data);
      updateJoinData(data);

      setIsLoading(false);

      toast.success('해당 모임글에 참여하였습니다. 멤버들과 채팅을 나눠보세요');
    } catch {
      setIsLoading(false);
      toast.error('채팅에 참여할 수 없습니다');
    }
  };

  const routeToChat = `/main/post/${postData.id}/chat`;

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
        {postData.image && postData.image.length > 0 && <PostDetailImage />}
        <div className={S.main}>
          <h2 className={S.main_title}>{postData.title}</h2>
          <div className={S.main_detail}>
            <DetailItem label="종목" value={postData.category} />
            <DetailItem label="장소" value={postData.location} />
            <DetailItem label="일시" value={postData.date} />
            <DetailItem label="인원" value={postData.memberCount} />
          </div>
        </div>

        <div className={S.sub}>
          <h3 className={S.sub_title}>내용</h3>
          <div className={S.sub_description}>{postData.description}</div>
        </div>

        <div className={S.attend}>
          <span className={S.attend_member_pop}>
            참여멤버 {members.length}명
            <span className={S.attend_member_pop_max}>
              / {postData.memberCount}명
            </span>
          </span>
          <PostManager members={users} imageWidth={44} imageHeight={44} />
        </div>

        <div className={S.attend_button}>
          {members.includes(user) ? (
            <Link to={routeToChat} className={S.button}>
              채팅하기
            </Link>
          ) : (
            <Button className={S.button} onClick={handleClick}>
              참여하기
            </Button>
          )}
        </div>
      </article>
    </>
  );
}
