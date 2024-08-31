import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './RootLayout';
import Home from './home';
import MyAppointment from './myAppointment';
import Community from './community';
import Profile from './profile';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'myAppointment', element: <MyAppointment /> },
      { path: 'community', element: <Community /> },
      { path: 'Profile', element: <Profile /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
