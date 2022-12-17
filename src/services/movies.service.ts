import { Movie } from "../interfaces/services/api.interface";
import { HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

export async function getMovie(movieId: number) {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const url = `${baseUrl}movie/${movieId}`;

  try {
    const response = await rest<Movie>(HttpMethod.GET, url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
