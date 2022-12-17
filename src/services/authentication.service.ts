import { RequestTokenResponse } from "../interfaces/services/api.interface";
import { HttpMethod, SessionResponse, } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

const badEndMessage = 'Unable to read ENV';
const API_KEY = process.env.REACT_APP_API_V3_AUTH || badEndMessage;
const API_KEY_V4 = process.env.REACT_APP_API_V4_AUTH || badEndMessage


export async function getRequestToken() {
const url = `authentication/token/new?api_key=${API_KEY}&request_token=${API_KEY_V4}`;
try {
  const response = await rest<RequestTokenResponse>(HttpMethod.GET, url);
  return response.data
} catch (error) {
  console.error(error);
  throw error
}
}

export async function login(request_token:string): Promise<SessionResponse> {
  const endpoint = `authentication/session/new?api_key=${API_KEY}`;
  const body = { request_token }
  try {
    const response = await rest<SessionResponse>(HttpMethod.POST, endpoint,{},body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
