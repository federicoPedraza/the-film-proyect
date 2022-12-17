import axios, { AxiosResponse } from "axios";
import {
  ApiResponse,
  HttpMethod,
} from "../../interfaces/services/rest.interface";
const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_V4_AUTH
export async function rest<T>(
  method: HttpMethod,
  url: string,
  headers?: Record<string, string>,
  data?: any
): Promise<ApiResponse<T>> {
  const fullUrl = `${BASE_URL}${url}`
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url: fullUrl,
      data,
      headers: {
        ...headers,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
        Authorization: `Bearer ${API_KEY}`,
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
