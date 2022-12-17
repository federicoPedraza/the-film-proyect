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

export interface GetTrendingResponse {
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

export interface AccountResponse {
  id: number;
  username: string;
  name: string;
  avatar: {
    gravatar: {
      hash: string;
    }
  }
}
