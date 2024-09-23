import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import MainPost from './home/component/MainPost';
import Landing from './landing';
import MainFeed from './community/component/MainFeed';
import NotFound from './notFound';

const LazySearchPage = React.lazy(() => import('@/routes/search')); // Lazy loading 정의

const routes = [
  { path: '/', element: <Landing /> },
  { path: '*', element: <NotFound /> },
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
          { index: true, element: <Navigate to="new" replace /> },
          { path: 'new', element: <MainPost /> },
          { path: 'recommend', element: <MainPost /> },
          { path: 'interest', element: <MainPost /> },
        ],
      },
      {
        path: 'search',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {' '}
            {/* 로딩 스피너 없이 간단한 텍스트 */}
            <LazySearchPage />
          </Suspense>
        ),
      },
      {
        path: 'myAppointment',
        lazy: () => import('@/routes/myAppointment'),
      },
      {
        path: 'community',
        lazy: () => import('@/routes/community'),
        children: [
          { index: true, element: <Navigate to="new" replace /> },
          { path: 'new', element: <MainFeed /> },
          { path: 'recommend', element: <MainFeed /> },
        ],
      },
      {
        path: 'community/create',
        lazy: () => import('@/routes/community/CreateFeed'),
      },
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
  },
  {
    path: '/main/chatlist',
    lazy: () => import('@/routes/chatList'),
  },
  {
    path: '/main/post/:postId/chat',
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
];

const router = createBrowserRouter(routes);

export default router;
