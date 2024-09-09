import { create } from 'zustand';

export const useNavList = create(() => ({
  navList: [
    {
      path: '/main/home',
      text: '홈',
      icon: 'home',
      iconFull: 'homeFull',
    },
    {
      path: '/main/myAppointment',
      text: '내 모임',
      icon: 'calendar',
      iconFull: 'calendarFull',
    },
    {
      path: '/main/community',
      text: '커뮤니티',
      icon: 'people',
      iconFull: 'peopleFull',
    },
    {
      path: '/main/profile',
      text: '프로필',
      icon: 'person',
      iconFull: 'personFull',
    },
  ],
}));

export const useHeader = create(() => ({
  header: [
    {
      path: '/main/home',
      iconList: [
        { iconId: 'search', path: '/main/search', title: '검색' },
        { iconId: 'chat', path: '/main/chat', title: '채팅' },
        { iconId: 'alarm', path: '/main/alarm', title: '알림' },
      ],
    },
    {
      path: '/main/myAppointment',
      text: '내 모임',
      iconList: [
        { iconId: 'search', path: '/main/search', title: '검색' },
        { iconId: 'chat', path: '/main/chat', title: '채팅' },
        { iconId: 'alarm', path: '/main/alarm', title: '알림' },
      ],
    },
    {
      path: '/main/community',
      text: '커뮤니티',
      iconList: [
        { iconId: 'search', path: '/main/search', title: '검색' },
        { iconId: 'chat', path: '/main/chat', title: '채팅' },
        { iconId: 'alarm', path: '/main/alarm', title: '알림' },
      ],
    },
    {
      path: '/main/profile/appointment',
      text: '프로필',
      iconList: [
        { iconId: 'setting', path: '/main/profile/setting', title: '설정' },
      ],
    },
    {
      path: '/main/profile/feed',
      text: '프로필',
      iconList: [
        { iconId: 'setting', path: '/main/profile/setting', title: '설정' },
      ],
    },
  ],
}));

export const useProfileNav = create(() => ({
  profileNav: [
    { path: '/main/profile/appointment', text: '모임', end: true },
    { path: '/main/profile/feed', text: '게시글' },
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

export const useSignupStore = create((set, get) => ({
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  verificationCode: '',
  agreeToTerms: {
    all: false,
    terms: false,
    privacy: false,
    age: false,
  },
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setVerificationCode: (verificationCode) => set({ verificationCode }),
  setAgreeToTerms: (updater) =>
    set((state) => ({
      agreeToTerms:
        typeof updater === 'function'
          ? updater(state.agreeToTerms)
          : { ...state.agreeToTerms, ...updater },
    })),
  isPasswordMatching: () => {
    const { password, confirmPassword } = get();
    return password === confirmPassword && password.length > 0;
  },
  isNextEnabled: () => {
    const { password, confirmPassword } = get();
    return password === confirmPassword && password.length > 0;
  },
}));
