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
import EditProfile from './profile/EditProfile/EditProfile';
import AttendPost from '@/routes/home/component/AttendPost';
import EditInterest from './profile/EditInterest/EditInterest';
import Landing from './landing';
import Login from './login';
import SignUp from './signup';
import CreateFeedPage from './community/CreateFeedPage';

import NewPost from './post/component/NewPost';
import NewCategory from './post/component/NewCategory';
import AttendPost from './attendpost';

import Setting from './profile/Setting/Setting';
import DeleteAccount from './profile/Setting/DeleteAccount';
import ChatList from './chatList';
import ChatRoom from './chatList/ChatRoom/ChatRoom';


const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
        // path: '',

        // element: <Home />,
        // children: [
        //   { index: true, element: <MainPost /> },
        //   { path: 'new', element: <MainPost /> },
        //   { path: 'interest', element: <MainPost /> },
        // ],
      },

      {
        path: 'post/:postId',
        element: (
          <PostDetail
            title="TITLE"
            sportType="러닝"
            location="종합운동장"
            datetime="2024년 9월 1일"
            pop={1}
            description="상세 내용"
          />
        ),
        children: [
          // post/:postId/join 경로 추가
          // { path: 'join', element: <AttendPost /> },
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
      {
        path: 'chatList',
        element: <ChatList />,
      },
    ],
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
      { path: 'join', element: <AttendPost nickName="닉네임" /> },
    ],
  },
  { path: 'chatList/chatRoom', element: <ChatRoom /> },
  { path: 'profile/edit', element: <EditProfile /> },
  { path: 'profile/edit/interest', element: <EditInterest /> },
  { path: 'profile/setting', element: <Setting /> },
  { path: 'profile/setting/deleteAccount', element: <DeleteAccount /> },
  { path: '/Landing', element: <Landing /> },

  { path: '/Landing/Login', element: <Login /> },
  { path: '/Landing/SignUp', element: <SignUp /> },
  { path: '/new/post', element: <NewPost /> },
  { path: '/new/post/category', element: <NewCategory /> },
  { path: '/post/:postId/join', element: <AttendPost /> },

  { path: '/Login', element: <Login /> },
  { path: '/SignUp', element: <SignUp /> },

];

const router = createBrowserRouter(routes);

export default router;
