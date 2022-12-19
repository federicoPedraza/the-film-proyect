import create from 'zustand';
import { persist } from 'zustand/middleware';
import { UserData } from './interfaces/services/rest.interface';

type StoreTokenState = {
  user_data: UserData | null;
  session_id: string | null;
  setUserData: (new_user_data: UserData) => void;
  setSession: (session_id: string, expirasAt: string)=> void,
  expiresAt: string | null;
};

export const useSession = create<StoreTokenState>()(
  persist(
    (set) => ({
      user_data: null,
      session_id: null,
      setUserData: (new_user_data: UserData) => {
        set({
          user_data: new_user_data,
        });
      },
      expiresAt: null,
      setSession: (session_id: string, expiresAt: string) =>{
          set({ 
            session_id: session_id, 
            expiresAt: expiresAt 
          });
      }}), 
      { name: 'USER-store' }
  )
  );



export default useSession;
