import S from '@/routes/profile/style.module.css';

import { Outlet } from 'react-router-dom';
import NewPost from './component/NewPost';

function Post() {
  return (
    <div className={S.component}>
      <NewPost></NewPost>
      <Outlet />
    </div>
  );
}

export default Post;
