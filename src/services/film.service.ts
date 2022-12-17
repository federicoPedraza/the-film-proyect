import { IFilm, MediaType } from "../interfaces/film.interface";
import { Movie } from "../interfaces/services/api.interface";
import { GetTrendingResponse, HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

export async function getTrendingFilms(): Promise<IFilm[]> {
    const apiKey = process.env.REACT_APP_API_V3_AUTH;
    const url = `/trending/all/week?api_key=${apiKey}`;

    try {
        const response = await rest<GetTrendingResponse>(HttpMethod.GET, url);
        const films = response.data.results.map((film: IFilm) => {
            const _title = film.media_type == MediaType.Movie ? film.title : film.name;
            return {
                media_type: film.media_type,
                title: _title,
                name: _title,
                popularity: film.popularity,
                id: film.id
            }
        });
        console.log(films);
        return films;
    } catch (error) {
        console.error(error);
        return[];
    }
}
