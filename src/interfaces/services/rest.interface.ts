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

export interface TokenResponse {
  request_token: string,
  expires_at: string,
  success: string
};