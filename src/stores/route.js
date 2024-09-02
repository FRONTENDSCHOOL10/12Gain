import { create } from 'zustand';

export const useNavList = create((set) => ({
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
  inputValue: '', // inputValue 상태 추가
  setInputValue: (value) => set({ inputValue: value }), // inputValue 업데이트 함수 추가
  clearInputValue: () => set({ inputValue: '' }), // inputValue 초기화 함수 추가
}));
