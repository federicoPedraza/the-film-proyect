export interface StoreTokenState {
  setSession(session_id: string, expires_at: string): any;
  session_id: string | null;
  expiresAt: string | null;
}
