import create from "zustand";
import { StoreTokenState } from './interfaces/store.interface'

const useSession = create((set: (state: Partial<StoreTokenState>) => void, get: () => StoreTokenState) => ({
  session_id: null,
  expiresAt: null,
  setSession: (session_id: string, expiresAt: string) =>
    set({ session_id: session_id, expiresAt: expiresAt }),
  clearSession: () => set({ session_id: null, expiresAt: null })
}));

export default useSession;
