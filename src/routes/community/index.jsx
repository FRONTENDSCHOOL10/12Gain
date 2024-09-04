import S from '@/routes/community/style.module.css';

import Header from '@/components/Header/Header';
import Button from '@/components/Button/Button';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/Icon/Icon';
import BtnThumsup from './component/BtnThumsup';
import BtnChat from './component/BtnChat';

function Community() {
  const navigate = useNavigate();

  return (
    <div className={S.component}>
      <Header text="커뮤니티" iconList={['search', 'chat', 'alarm']} />
      <div>최신 신규</div>
      <main>
        <article>
          <section>
            <div>
              <div>프사</div>
              <div>닉네임</div>
              <div>시간</div>
            </div>
            <div>케밥 메뉴</div>
          </section>
          <section>상세 내용 입력</section>
          <section>사진(선택)</section>
          <section className={S.BtnCount}>
            <BtnThumsup />
            <BtnChat />
          </section>
        </article>
        <Button width="48px" height="48px" onClick={() => navigate('create')}>
          <Icon id="write" width={28} height={28} color={'var(--white)'} />
        </Button>
      </main>
      <Outlet />
    </div>
  );
}

export default Community;
