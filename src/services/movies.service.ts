import { Movie, RequestTokenResponse } from "../interfaces/services/api.interface";
import { HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";
const apiKey = process.env.react_app_api_v3_auth || '2c6cd383602f9dd84e2c543271f39c40';

export async function getMovie(query: string, year: string) {
  const url = `search/movie?api_key=${apiKey}&query=${query}&year=${year}`;

  try {
    const response = await rest<Movie>(HttpMethod.GET, url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getGenresList() {
  const apiKey = process.env.react_app_api_v3_auth;
  const url = `/authentication/token/new?api_key=${apiKey}`;

  try {
    const response = await rest<Movie>(HttpMethod.GET, url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}