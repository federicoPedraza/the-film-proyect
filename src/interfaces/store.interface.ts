import { UserData } from "./services/rest.interface";

export interface StoreTokenState {
  setSession(session_id: string, expires_at: string, user_id: string): any;
  session_id: string | null;
  user_data: UserData;
  expiresAt: string | null;
}
