import { HttpMethod, TokenResponse } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

const badEndMessage = 'Unable to read ENV';
const API_KEY = process.env.REACT_APP_API_V3_AUTH || badEndMessage;
const REQUEST_TOKEN = process.env.REACT_APP_API_V4_AUTH || badEndMessage;

export async function login(): Promise<TokenResponse> {
  const endpoint = 'authentication/token/new';
  const headers = { api_key: API_KEY, request_token: REQUEST_TOKEN };

  try {
    const response = await rest<TokenResponse>(HttpMethod.GET, endpoint, headers);
    console.log(response.data); // CORS ERROR, UNAUTHORIZED PERMANENTLY
    return response.data;
  } catch (error) {
    throw error;
  }
}
