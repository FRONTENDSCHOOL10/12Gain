import S from '@/routes/chatList/ChatRoom/ChatRoom.module.css';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import SendMessage from '../component/SendMessage';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMessageData } from '@/stores/chat';
import { useParams } from 'react-router-dom';
import { usePostData } from '@/stores/form';
import pb from '@/api/pb';

export function Component() {
  const { postId } = useParams();
  const userId = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;

  const [isLoading, setIsLoading] = useState(false);

  const { chatData, fetchChatData, fetchChatRealTime } = useMessageData();
  const { postData, fetchPost } = usePostData();

  useEffect(() => {
    setIsLoading(true);
    fetchChatData(postId);
    fetchPost(postId);

    pb.collection('messages').subscribe(`${chatData.id}`, function (e) {
      fetchChatRealTime(e.record);
    });

    setIsLoading(false);

    return () => {
      pb.collection('messages').unsubscribe(`${chatData.id}`);
    };
  }, [fetchChatData, postId, fetchPost, fetchChatRealTime, chatData.id]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <HeaderForDetails
        leftIcon={[
          { iconId: 'left', title: '뒤로가기', path: '/main/chatlist' },
        ]}
        text={postData.title}
        rightIcon={[{ iconId: 'more', title: '더보기' }]}
      />
      <main className={S.component}>
        <h2 className="sr-only">메시지 내용</h2>
        {chatData?.id ? (
          <div className={S.chatRoom__container}>
            <div className={S.chatRoom__guide}>
              <span>
                닉네임님은 우수판매자에요. 개인정보유도와 명예훼손 내용은 차단될
                수 있어요. 자세히 보기
              </span>
            </div>
            {chatData?.messages?.map((item, index) =>
              item.sender === userId ? (
                <div
                  key={index}
                  className={`${S.message__container} ${S.message__container__user}`}
                >
                  <span className={`${S.message__user} ${S.message}`}>
                    {item.message}
                  </span>
                </div>
              ) : (
                <div key={index} className={S.message__container}>
                  <span className={`${S.message__others} ${S.message}`}>
                    {item.message}
                  </span>
                </div>
              )
            )}
          </div>
        ) : (
          <div className={S.guide}>채팅을 시작해보세요.</div>
        )}
      </main>
      <SendMessage />
    </>
  );
}
