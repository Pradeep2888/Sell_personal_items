import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        loggedIn: false,
        authorised: false,
        userData: {},
        authorise: (userData) =>
          set({ authorised: true, loggedIn: true, userData }),
        unauthorise: () =>
          set({ authorised: false, loggedIn: false, userData: {} }),
        logout: () => set({ loggedIn: false, authorised: false, userData: {} }),
      }),
      { name: "authStore" }
    )
  )
);

export const useGlobalState = create(
  devtools((set) => ({
    loading: false,
    error: false,
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
  }))
);
