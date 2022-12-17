export interface StoreTokenState {
  setSession(request_token: any, expires_at: any): any;
  sessionToken: string | null;
  expiresAt: string | null;
}
