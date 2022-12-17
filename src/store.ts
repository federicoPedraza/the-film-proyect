import create from "zustand";
import { StoreTokenState } from './interfaces/store.interface'

const useSession = create((set: (state: Partial<StoreTokenState>) => void, get: () => StoreTokenState) => ({
  sessionToken: null,
  expiresAt: null,
  setSession: (token: string, expiresAt: string) =>
    set({ sessionToken: token, expiresAt: expiresAt }),
  clearSession: () => set({ sessionToken: null, expiresAt: null })
}));

export default useSession;
