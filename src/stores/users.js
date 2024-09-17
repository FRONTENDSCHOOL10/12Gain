import pb from '@/api/pb';
import { create } from 'zustand';

export const useUsers = create((set) => ({
  users: [],

  updateUsers: (data) => set(({ users }) => ({ users: { ...users, ...data } })),

  fetchUsers: async (filter) => {
    if (!filter) return;

    const results = await pb.collection('users').getList(1, 50, {
      filter: filter,
    });

    set({ users: results.items });
  },
}));
