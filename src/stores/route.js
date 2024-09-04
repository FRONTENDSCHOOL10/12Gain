import { create } from 'zustand';

export const useNavList = create(() => ({
  navList: [
    { path: '/home', text: '홈', icon: 'home', iconFull: 'homeFull' },
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

export const useInputValue = create((set) => ({
  inputValue: '',
  setInputValue: (value) => set({ inputValue: value }),
  clearInputValue: () => set({ inputValue: '' }),
}));

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useLoginForm = create((set, get) => ({
  email: '',
  password: '',
  isEmailValid: false,
  setEmail: (email) =>
    set({
      email,
      isEmailValid: isValidEmail(email),
    }),
  setPassword: (password) => set({ password }),
  isFormValid: () => {
    const { email, password, isEmailValid } = get();
    return isEmailValid && email.trim() !== '' && password.trim() !== '';
  },
  clearForm: () => set({ email: '', password: '', isEmailValid: false }),
}));
