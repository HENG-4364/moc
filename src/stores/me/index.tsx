/* eslint-disable */
import { create, StoreApi, UseBoundStore } from 'zustand';

interface StoreState {
  me: any | null;
  setMe: (me: any | null) => void;
}

export const createUserStore = (initialUser: any | null) =>
  create<StoreState>()((set) => ({
    me: initialUser,
    setMe: (me) => set({ me }),
  }));

// This is a function that creates the store, not the store itself
export let useUserStore: UseBoundStore<StoreApi<StoreState>>;

// This function will be called to initialize the store
export const initializeUserStore = (initialUser: any | null) => {
  useUserStore = createUserStore(initialUser);
};

