import create from "zustand";
import { persist } from "zustand/middleware";
import { StoreTokenState } from './interfaces/store.interface'


export const useSession = create<StoreTokenState>()(
  persist(
    (set) => ({
      session_id: null,
      expiresAt: null,
      setSession: (session_id: string, expiresAt: string) =>
        set({ session_id: session_id, expiresAt: expiresAt }),
    }),
    { name: "USER-store" }
  )
);
export default useSession;
