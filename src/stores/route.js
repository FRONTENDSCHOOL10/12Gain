import { create } from 'zustand';

export const useNavList = create(() => ({
  navList: [
    { path: '/', text: '홈', icon: 'home', iconFull: 'homeFull' },
    {
      path: '/myAppointment',
      text: '내 모임',
      icon: 'calendar',
      iconFull: 'calendarFull',
    },
    {
      path: '/community',
      text: '커뮤니티',
      icon: 'people',
      iconFull: 'peopleFull',
    },
    {
      path: '/profile',
      text: '프로필',
      icon: 'person',
      iconFull: 'personFull',
    },
  ],
}));
