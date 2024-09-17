import { create } from 'zustand';

export const useCheckedInterest = create((set) => ({
  checkedInterest: '',
  setCheckedInterest: (value) => set({ checkedInterest: value }),
  count: 0,
  IncreaseCount: (value) =>
    set((state) => ({ count: state.count + 1 + value })),
}));

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
