import { AxiosResponseHeaders } from "axios";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  headers: AxiosResponseHeaders | Partial<Record<string, string> & { "set-cookie"?: string[] | undefined; }>;
  request_token?: string;
  expires_at?: string;
}

export interface PaginatedResponse<T> {
  id?: number;
  page?: number;
  results?: T[];
  total_pages?: number;
  total_results?: number;
}

export interface GetFilmsResponse {
  results: [],
  page: number,
  total_pages: number,
  total_results: number
}

export interface SessionResponse {
  session_id: string,
  success: boolean
};

export interface AuthFailure {
  failure:boolean,
  status_code: number
  status_message: string,
  success: boolean
}

export interface UserData {
  id: number;
  username: string;
  name?: string;
  include_adult: boolean;
  iso_639_1?: string;
  iso_3166_1?:string;
  avatar: {
    gravatar: {
      hash: string;
    },
    tmdb:{
      avatar_path?: string;
    }
  }
}


export interface CommonPostRes {
  status_code?: string;
  status_message?: string;
}

export interface AccountStatesRes {
  id?: number;
  favorite?:boolean,
  rated?: { value?: number };
  watchlist?:boolean;
}