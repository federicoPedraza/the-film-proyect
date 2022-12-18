import { IFilm, MediaType } from "../interfaces/film.interface";
import { GetTrendingResponse, HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

export function mapFilmResults(results: []) {
    const films = results.map((film: IFilm) => {
        const _title = film.media_type == MediaType.Movie ? film.title : film.name;
        const _poster_path = film.poster_path ? film.poster_path : film.backdrop_path;
        return {
            media_type: film.media_type,
            title: _title,
            name: _title,
            popularity: film.popularity,
            id: film.id,
            poster_path: _poster_path,
        }
    });

    return films;
}

export async function getTrendingFilms(): Promise<IFilm[]> {
    const apiKey = process.env.REACT_APP_API_V3_AUTH;
    const url = `/trending/all/week?api_key=${apiKey}`;

    try {
        const response = await rest<GetTrendingResponse>(HttpMethod.GET, url);
        return mapFilmResults(response.data.results)
            .sort((a, b) => {
                const aPop = a.popularity || 0;
                const bPop = b.popularity || 0;
                return aPop - bPop}
            );
    } catch (error) {
        console.error(error);
        return[];
    }
}

export async function getDiscoverMovies(): Promise<IFilm[]> {
    const apiKey = process.env.REACT_APP_API_V3_AUTH;
    const url = `/discover/movie?api_key=${apiKey}`;

    try {
        const response = await rest<GetTrendingResponse>(HttpMethod.GET, url);
        return mapFilmResults(response.data.results);
    } catch (error) {
        console.error(error);
        return[];
    }
}

export async function getDiscoverTVShows(): Promise<IFilm[]> {
    const apiKey = process.env.REACT_APP_API_V3_AUTH;
    const url = `/discover/tv?api_key=${apiKey}`;

    try {
        const response = await rest<GetTrendingResponse>(HttpMethod.GET, url);
        return mapFilmResults(response.data.results);
    } catch (error) {
        console.error(error);
        return[];
    }
}