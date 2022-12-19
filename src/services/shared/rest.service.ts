import axios, { AxiosResponse } from "axios";
import {
  ApiResponse,
  HttpMethod,
} from "../../interfaces/services/rest.interface";
const BASE_URL = process.env.react_app_base_url
const API_KEY = process.env.react_app_api_v4_auth || '2c6cd383602f9dd84e2c543271f39c40'
export async function rest<T>(
  method: HttpMethod,
  url: string,
  headers?: Record<string, string>,
  data?: any
): Promise<ApiResponse<T>> {
  const fullUrl = `https://api.themoviedb.org/3/${url}`
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url: fullUrl,
      data,
      headers: {
        ...headers,
      },
    });
    return {
      data: response.data,
      status: response.status,
      headers: response.headers
    };
  } catch (error) {
    throw error;
  }
}
