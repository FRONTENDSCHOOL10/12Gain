import { create } from 'zustand';
import pb from '@/api/pb';

const postStore = create((set, get) => ({
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

      const records = await pb.collection('appointments').getList(1, 50, {
        sort: sortField,
        filter: filterString,
        expand: 'writer',
      });
      const formattedPosts = records.items.map((post) => ({
        ...post,
        date: post.date ? new Date(post.date).toISOString() : null,
      }));

      set({ posts: formattedPosts, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default postStore;
