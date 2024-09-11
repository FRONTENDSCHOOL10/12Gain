import { create } from 'zustand';
import pb from '@/api/pb';

const usePostStore = create((set) => ({
  posts: [],
  isLoading: false,
  error: null,
  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const records = await pb.collection('appointments').getList(1, 50, {
        sort: '-created',
        expand: 'writer',
      });
      set({ posts: records.items, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default usePostStore;
