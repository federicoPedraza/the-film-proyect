import { Movie } from "../interfaces/services/api.interface";
import { HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

export async function getMovie() {
  const apiKey = process.env.REACT_APP_API_V3_AUTH;
  const query = "Ponyo";
  const year = "2008";
  const url = `search/movie?api_key=${apiKey}&query=${query}&year=${year}`;

  try {
    const response = await rest<Movie>(HttpMethod.GET, url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getGenresList() {
  const apiKey = process.env.REACT_APP_API_V3_AUTH;
  const url = `/authentication/token/new?api_key=${apiKey}`;

  try {
    const response = await rest<Movie>(HttpMethod.GET, url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}