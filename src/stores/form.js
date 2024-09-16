import { create } from 'zustand';

// export const useAuthStore = create((set) => ({
//   user: null,
//   token: null,
//   setUser: (user) => set({ user }),
//   setToken: (token) => set({ token }),
//   clearAuth: () => set({ user: null, token: null }),
// }));

// export const useSignupStore = create((set) => ({
//   email: '',
//   setEmail: (email) => set({ email }),
//   password: '',
//   setPassword: (password) => set({ password }),
//   confirmPassword: '',
//   setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
//   phoneNumber: '',
//   setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
//   verificationCode: '',
//   setVerificationCode: (verificationCode) => set({ verificationCode }),
//   agreeToTerms: { all: false, terms: false, privacy: false, age: false },
//   setAgreeToTerms: (terms) => set({ agreeToTerms: terms }),
//   user: null, // 추가: 사용자 상태
//   setUser: (user) => set({ user }), // 추가: 사용자 설정 함수
//   token: '', // 추가: 토큰 상태
//   setToken: (token) => set({ token }), // 추가: 토큰 설정 함수

//   isEmailValid: (email) => /\S+@\S+\.\S+/.test(email),
//   isPasswordMatching: (state) => state.password === state.confirmPassword,
//   isNextEnabled: (state) =>
//     state.password && state.confirmPassword && state.isPasswordMatching(state),
// }));

export const useCheckedInterest = create((set) => ({
  checkedInterest: '',
  //   setCheckedInterest: (value) => set({ CheckedInterest: value }),
  setCheckedInterest: (value) => set({ checkedInterest: value }),
  count: 0,
  IncreaseCount: (value) =>
    set((state) => ({ count: state.count + 1 + value })),
}));

// 포켓베이스 내 모임 데이터 항목
const INITIAL_POSTDATA = {
  title: '',
  description: '',
  category: '',
  memberCount: '1',
  date: '',
  time: '',
  location: '',
  writer: '',
};

// 내 모임 데이터 업데이트
export const usePostData = create((set) => ({
  postData: INITIAL_POSTDATA,
  imageData: [],

  updatePostData: (data) =>
    set(({ postData }) => ({ postData: { ...postData, ...data } })),

  resetPostData: () => set({ postData: INITIAL_POSTDATA }),

  updateImageData: (data) => set(() => ({ imageData: data })),

  resetImageData: () => set({ imageData: [] }),
}));

const INITAIL_FEEDDATA = {
  content: '',
  writer: '',
};

export const useFeedData = create((set) => ({
  feedData: INITAIL_FEEDDATA,
  imageData: [],

  updateFeedData: (data) =>
    set(({ feedData }) => ({ feedData: { ...feedData, ...data } })),

  resetFeedData: () => set({ feedData: INITAIL_FEEDDATA }),

  updateImageData: (data) => set(() => ({ imageData: data })),

  resetImageData: () => set({ imageData: [] }),
}));
