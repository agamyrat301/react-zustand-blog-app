import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isAdmin: false,
  loading: true, // Initialize with true to indicate fetching is in progress
  setUser: (user) =>
    set({
      user,
      isAdmin: user?.is_admin === 1,
      loading: false, // Set loading to false after fetching user
    }),
  setLoading: (loading) => set({ loading }),
  setAdmin: (isAdmin) => set({ isAdmin }),
  setAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
  setToken: (token) => set({ token: token, isAuthenticated: true }),
  logout: () => {
    localStorage.removeItem("jwtToken"); // Clear token from local storage
    set({
      token: null,
      user: null,
      isAuthenticated: false,
      isAdmin: false,
      loading: false,
    });
  },
}));

export default useAuthStore;
