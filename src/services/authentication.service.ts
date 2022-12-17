import { HttpMethod, TokenResponse } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const REDIRECT_URL = 'https://federicopedraza.github.io/the-film-proyect/onboarding/login';
export async function login() {
  const response = await rest<TokenResponse>(
    HttpMethod.POST, 
    `${BASE_URL}auth/request_token`, {
        "redirect_to": REDIRECT_URL
    });
    const { location:newPageTarget } = response.headers
    if( newPageTarget ){
      window.location.href = newPageTarget
    }
}
