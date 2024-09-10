import { create } from 'zustand';

export const useCheckedInterest = create((set) => ({
  checkedInterest: '',
  setCheckedInterest: (value) => set({ CheckedInterest: value }),
  count: 0,
  IncreaseCount: (value) =>
    set((state) => ({ count: state.count + 1 + value })),
}));

// 포켓베이스 내 모임 데이터 항목
const INITIAL_VALUE = {
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
  postData: INITIAL_VALUE,

  updatePostData: (data) =>
    set(({ postData }) => ({ postData: { ...postData, ...data } })),

  reset: () => set({ postData: INITIAL_VALUE }),
}));
