import axios, { AxiosResponse } from "axios";
import {
  ApiResponse,
  HttpMethod,
} from "../../interfaces/services/rest.interface";

export async function rest<T>(
  method: HttpMethod,
  url: string,
  data?: any
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url,
      data,
    });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    throw error;
  }
}
