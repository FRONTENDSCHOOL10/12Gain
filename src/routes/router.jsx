import { createBrowserRouter, Navigate } from 'react-router-dom';

import MainPost from './home/component/MainPost';
import PostDetail from '@/components/PostDetail/PostDetail';
import AttendPost from '@/routes/home/component/AttendPost';
import Landing from './landing';
import CreateFeedPage from './community/CreateFeedPage';

const routes = [
  { path: '/', element: <Landing /> },
  { path: 'login', lazy: () => import('@/routes/login') },
  { path: 'signUp', lazy: () => import('@/routes/signup') },
  {
    path: '/main',
    lazy: () => import('@/routes/RootLayout'),
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: 'home',
        lazy: () => import('@/routes/home'),
        children: [
          { index: true, element: <MainPost /> },
          { path: 'new', element: <MainPost /> },
          { path: 'interest', element: <MainPost /> },
        ],
      },
      {
        path: 'myAppointment',
        lazy: () => import('@/routes/myAppointment'),
      },
      { path: 'community', lazy: () => import('@/routes/community') },
      { path: 'community/create', element: <CreateFeedPage /> },
      {
        path: 'profile',
        lazy: () => import('@/routes/profile'),
        children: [
          {
            index: true,
            element: <Navigate to="appointment" replace />,
          },
          {
            path: 'appointment',
            lazy: () => import('@/routes/profile/component/MyPost'),
          },
          {
            path: 'feed',
            lazy: () => import('@/routes/profile/component/MyFeed'),
          },
        ],
      },
    ],
  },
  {
    path: 'post/:postId',
    element: <PostDetail />,
    children: [
      // post/:postId/join 경로 추가
      { path: 'join', element: <AttendPost nickName="닉네임" /> },
    ],
  },
  {
    path: 'chat',
    lazy: () => import('@/routes/chatList'),
  },
  {
    path: 'chat/:chatroomId',
    lazy: () => import('@/routes/chatList/ChatRoom/ChatRoom'),
  },
  {
    path: 'main/profile/edit',
    lazy: () => import('@/routes/profile/EditProfile'),
  },
  {
    path: 'main/profile/edit/interest',
    lazy: () => import('@/routes/profile/EditInterest'),
  },
  {
    path: 'main/profile/setting',
    lazy: () => import('@/routes/profile/Setting'),
  },
  {
    path: 'main/profile/deleteAccount',
    lazy: () => import('@/routes/profile/DeleteAccount'),
  },
];

const router = createBrowserRouter(routes);

export default router;
