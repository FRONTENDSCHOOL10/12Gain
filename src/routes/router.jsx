import { createBrowserRouter, Navigate } from 'react-router-dom';

import RootLayout from './RootLayout';
import Home from './home';
import MyAppointment from './myAppointment';
import Community from './community';
import Profile from './profile';
import MainPost from './home/component/MainPost';
import MyPost from './profile/component/MyPost';
import MyFeed from './profile/component/MyFeed';
import PostDetail from '@/components/PostDetail/PostDetail';
import EditProfile from './profile/component/EditProfile';
import AttendPost from '@/routes/home/component/AttendPost';
import EditInterest from './profile/component/EditInterest';
import CreateFeedPage from './community/CreateFeedPage';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        // element: <Home />,
        element: <Navigate to="home" replace />,
      },
      {
        path: 'post/:postId',
        element: (
          <PostDetail
            title="제목입니다"
            sportType="러닝"
            location="종합운동장"
            datetime="2024년 9월 1일"
            pop={1}
            description="설명입니다."
          />
        ),
        children: [
          // post/:postId/join 경로 추가
          { path: 'join', element: <AttendPost /> },
        ],
      },
      {
        path: 'home',
        element: <Home />,
        children: [
          { index: true, element: <MainPost /> },
          { path: 'new', element: <MainPost /> },
          { path: 'interest', element: <MainPost /> },
        ],
      },
      { path: 'myAppointment', element: <MyAppointment /> },
      { path: 'community', element: <Community /> },
      { path: 'community/create', element: <CreateFeedPage /> },
      {
        path: 'Profile',
        element: <Profile />,
        children: [
          { index: true, element: <MyPost /> },
          { path: 'community', element: <MyFeed /> },
        ],
      },
    ],
  },
  { path: 'profile/edit', element: <EditProfile /> },
  { path: 'profile/edit/interest', element: <EditInterest /> },
];

const router = createBrowserRouter(routes);

export default router;
