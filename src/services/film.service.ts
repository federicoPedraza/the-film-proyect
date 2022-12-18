import { IFilm, MediaType } from "../interfaces/film.interface";
import { Movie } from "../interfaces/services/api.interface";
import { GetTrendingResponse, HttpMethod } from "../interfaces/services/rest.interface";
import { getDominantColor } from "../utils/poster-helper";
import { rest } from "./shared/rest.service";

export async function getTrendingFilms(): Promise<IFilm[]> {
    const apiKey = process.env.REACT_APP_API_V3_AUTH;
    const url = `/trending/all/week?api_key=${apiKey}`;

    try {
        const response = await rest<GetTrendingResponse>(HttpMethod.GET, url);
        console.log(response.data.results);
        const films = response.data.results.map((film: IFilm) => {
            const _title = film.media_type == MediaType.Movie ? film.title : film.name;
            return {
                media_type: film.media_type,
                title: _title,
                name: _title,
                popularity: film.popularity,
                id: film.id,
                poster_path: film.poster_path,
            }
        });
        console.log(films);
        return films;
    } catch (error) {
        console.error(error);
        return[];
    }
}
