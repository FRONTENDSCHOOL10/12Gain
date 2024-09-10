import S from '@/routes/chatList/ChatRoom/ChatRoom.module.css';
import HeaderForDetails from '@/components/HeaderForDetails/HeaderForDetails';
import SendMessage from '../component/SendMessage';

const data = [
  { id: 1, message: 1 },
  { id: 1, message: 2 },
  { id: 1, message: 3 },
  { id: 2, message: 3 },
];

const myId = 1;

export function Component() {
  return (
    <>
      <HeaderForDetails
        leftIcon={['left']}
        text="채팅방 이름"
        rightIcon={['more']}
      />
      <main className={S.component}>
        <h2 className="sr-only">메시지 내용</h2>
        {data ? (
          <div className={S.chatRoom__container}>
            <div className={S.chatRoom__guide}>
              <span>
                닉네임님은 우수판매자에요. 개인정보유도와 명예훼손 내용은 차단될
                수 있어요. 자세히 보기
              </span>
            </div>
            {data.map((item, index) =>
              item.id === myId ? (
                <div
                  key={index}
                  className={`${S.message__container} ${S.message__container__user}`}
                >
                  <span className={`${S.message__user} ${S.message}`}>
                    맞음
                  </span>
                </div>
              ) : (
                <div key={index} className={S.message__container}>
                  <span className={`${S.message__others} ${S.message}`}>
                    안맞음
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
