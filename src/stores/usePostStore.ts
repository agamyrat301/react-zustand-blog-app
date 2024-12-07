import { create } from 'zustand';
import { Post } from '../types/Post';

interface PostState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    setPosts: (posts) => set({ posts }),
}));