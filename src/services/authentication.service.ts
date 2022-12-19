import { RequestTokenResponse } from "../interfaces/services/api.interface";
import { HttpMethod, SessionResponse, UserData, } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

const badEndMessage = 'Unable to read ENV';
const API_KEY = process.env.react_app_api_v3_auth || '2c6cd383602f9dd84e2c543271f39c40'|| badEndMessage;
const API_KEY_V4 = process.env.react_app_api_v4_auth || badEndMessage


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

export async function login(request_token: string): Promise<SessionResponse> {
  const endpoint = `authentication/session/new?api_key=${API_KEY}`;
  const body = { request_token }
  try {
    const response = await rest<SessionResponse>(HttpMethod.POST, endpoint, {}, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function logout(session_id: string): Promise<{success:boolean}> {
  const endpoint = `/authentication/session?session_id=${session_id}&api_key=${API_KEY}`;
  try {
    const response = await rest<SessionResponse>(HttpMethod.DELETE, endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function getUserData(sessionId: string): Promise<UserData> {
  const endpoint = `account?api_key=${API_KEY}&session_id=${sessionId}`
  try {
    const response = await rest<UserData>(
      HttpMethod.GET,
      endpoint,
    );
    return response.data
  } catch (error) {
    // ON ERROR: TOKEN IS NOT GOOD
    console.log(error)
    throw error
  }
}



export async function validateSession(sessionId: string): Promise<boolean> {
  const endpoint = `account?api_key=${API_KEY}&session_id=${sessionId}`
  try {
    const result = await rest<UserData>(
      HttpMethod.GET,
      endpoint,
    );
    return result?.status === 200;
  } catch (error) {
    // ON ERROR: TOKEN IS NOT GOOD
    return false;
  }
}
