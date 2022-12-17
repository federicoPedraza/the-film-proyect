export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
};


export interface RequestTokenResponse {
  expires_at: string,
  success:boolean,
  request_token: string
}