import S from '@/routes/profile/style.module.css';

import { Outlet } from 'react-router-dom';

function Post() {
  return (
    <div className={S.component}>
      <NewPost></NewPost>
      <Outlet />
    </div>
  );
}

export default Post;
