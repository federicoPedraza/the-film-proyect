import { Movie, RequestTokenResponse } from "../interfaces/services/api.interface";
import { HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";
const apiKey = process.env.REACT_APP_API_V3_AUTH;

export async function getMovie(query: string, year: string) {
  const url = `search/movie?api_key=${apiKey}&query=${query}&year=${year}`;

  try {
    const response = await rest<Movie>(HttpMethod.GET, url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
