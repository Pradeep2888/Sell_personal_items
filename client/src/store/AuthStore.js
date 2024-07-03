import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import Cookies from "js-cookie";
const loggedIn = Cookies.get("token");
export const useAuthStore = create(
  devtools(
    persist(
    (set) => ({
      loggedIn: loggedIn ? true : false,
      authorised: false,
      userData: {},
      login: (userData) => {
        set((state) => ({ loggedIn: true, userData }));
      },
      authorise: () => set({ authorised: true }),
      unauthorise: () => set({ authorised: false }),
      logout: () => set({ loggedIn: false, authorised: false, userData: {} }),
    }),
    { name: "user" }
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
