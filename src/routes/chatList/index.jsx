import S from '@/routes/chatList/style.module.css';

import Header from '@/components/Header/Header';
import Chat from './component/Chat';
import { useNavigate } from 'react-router-dom';

export function Component() {
  const navigate = useNavigate();

  return (
    <>
      <Header iconList={['search', 'chat', 'alarm']} />
      <main className={S.component}>
        <h2 className={S.headline}>모임채팅</h2>
        <ul>
          <li>
            <Chat
              onClick={() => {
                navigate('chatRoom');
              }}
            />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
          </li>
        </ul>
      </main>
    </>
  );
}
