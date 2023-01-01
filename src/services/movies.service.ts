import { Movie } from "../interfaces/services/api.interface";
import { HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";
const API_KEY = process.env.REACT_APP_API_V3_AUTH;

export async function getMovie(query: string, year: string) {
  const url = `search/movie?api_key=${API_KEY}&query=${query}&year=${year}`;

  try {
    const response = await rest<Movie>(HttpMethod.GET, url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getGenresList() {
  const url = `/authentication/token/new?api_key=${API_KEY}`;

  try {
    const response = await rest<Movie>(HttpMethod.GET, url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}