import { create } from 'zustand';
import pb from '@/api/pb';

const postStore = create((set, get) => ({
  posts: [],
  isLoading: false,
  error: null,
  filter: {
    mainCategory: '추천',
    sortBy: '등록순',
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
        const currentUser = pb.authStore.model;
        if (currentUser && currentUser.interests) {
          filterString = `category ~ "${currentUser.interests.join('|')}"`;
        } else {
          set({ error: '관심 카테고리를 설정해주세요.', isLoading: false });
          return;
        }
      }

      const records = await pb.collection('appointments').getList(1, 15, {
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

  updateUserInterests: async (newInterests) => {
    try {
      const currentUser = pb.authStore.model;
      if (currentUser) {
        await pb.collection('users').update(currentUser.id, {
          interests: newInterests,
        });

        const updatedUser = await pb.collection('users').getOne(currentUser.id);
        pb.authStore.save(updatedUser.token, updatedUser);
      } else {
        throw new Error('사용자가 로그인하지 않았습니다.');
      }
    } catch (error) {
      set({ error });
    }
  },
}));

export default postStore;
