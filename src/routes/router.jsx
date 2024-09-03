import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './RootLayout';
import Home from './home';
import MyAppointment from './myAppointment';
import Community from './community';
import Profile from './profile';
import MyPost from './profile/component/MyPost';
import MyFeed from './profile/component/MyFeed';
import EditProfile from './profile/component/EditProfile';
import Landing from './landing';
import Login from './login';
import SignUp from './signup';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'myAppointment', element: <MyAppointment /> },
      { path: 'community', element: <Community /> },
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
  { path: '/Landing', element: <Landing /> },
  { path: '/Landing/Login', element: <Login /> },
  { path: '/Landing/SignUp', element: <SignUp /> },
];

const router = createBrowserRouter(routes);

export default router;
