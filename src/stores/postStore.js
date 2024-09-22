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

        if (
          currentUser &&
          currentUser.interest &&
          currentUser.interest.length > 0
        ) {
          const interestFilters = currentUser.interest.map(
            (interest) => `category ~ "${interest}"`
          );
          filterString = `(${interestFilters.join(' || ')})`;
        } else {
          set({
            posts: [],
            error: '관심 운동 종목을 설정해주세요.',
            isLoading: false,
          });
          return;
        }
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
      set({ error: error.message, isLoading: false });
    }
  },

  updateUserInterests: async (newInterests) => {
    try {
      const currentUser = pb.authStore.model;
      if (currentUser) {
        await pb.collection('users').update(currentUser.id, {
          interest: newInterests,
        });

        const updatedUser = await pb.collection('users').getOne(currentUser.id);
        pb.authStore.save(updatedUser.token, updatedUser);

        get().fetchPosts();
      } else {
        throw new Error('사용자가 로그인하지 않았습니다.');
      }
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export default postStore;
