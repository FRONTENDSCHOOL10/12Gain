import { create } from 'zustand';
import pb from '@/api/pb';

const usePostStore = create((set, get) => ({
  posts: [],
  isLoading: false,
  error: null,
  filter: {
    mainCategory: '추천',
    sortBy: '등록순',
    userInterests: [],
  },
  setFilter: (newFilter) =>
    set((state) => ({ filter: { ...state.filter, ...newFilter } })),
  fetchPosts: async () => {
    const { filter } = get();
    set({ isLoading: true, error: null });
    try {
      let filterString = '';
      let sortField = '-created';

      if (filter.mainCategory === '추천') {
        sortField = '';
      } else if (filter.mainCategory === '신규') {
        sortField = '-created';
      } else if (filter.mainCategory === '관심') {
        filterString = `category ~ "${filter.userInterests.join('|')}"`;
      }

      if (filter.sortBy === '일정 가까운 순') {
        sortField = 'date';
      } else if (filter.sortBy === '지역순') {
        sortField = 'location';
      }

      const records = await pb.collection('appointments').getList(1, 50, {
        sort: sortField,
        filter: filterString,
        expand: 'writer',
      });
      set({ posts: records.items, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default usePostStore;
