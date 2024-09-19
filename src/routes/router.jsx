import { createBrowserRouter, Navigate } from 'react-router-dom';

import MainPost from './home/component/MainPost';
import AttendPost from '@/routes/attendpost';
import Landing from './landing';
import Comment from './community/CommentPage';

const routes = [
  { path: '/', element: <Landing /> },
  { path: 'login', lazy: () => import('@/routes/login') },
  { path: 'Landing/signUp', lazy: () => import('@/routes/signup') },
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
      {
        path: 'community/create',
        lazy: () => import('@/routes/community/CreateFeed'),
      },
      { path: 'community/comment', element: <Comment /> },
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
    path: '/main/post/:postId',
    lazy: () => import('@/routes/postDetails'),
    children: [
      // post/:postId/join 경로 추가
      // { path: 'join', element: <AttendPost /> },
    ],
  },
  {
    path: 'chat',
    lazy: () => import('@/routes/chatList'),
  },
  {
    path: 'chat/:chatroomId',
    lazy: () => import('@/routes/chatList/ChatRoom'),
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
    path: 'main/profile/setting/deleteAccount',
    lazy: () => import('@/routes/profile/DeleteAccount'),
  },
  {
    path: 'main/home/new/post',
    lazy: () => import('@/routes/home/CreatePost'),
  },
  {
    path: 'main/home/new/post/category',
    lazy: () => import('@/routes/home/SelectCategory'),
  },
  { path: 'post/:postId/join', element: <AttendPost /> },
];

const router = createBrowserRouter(routes);

export default router;
