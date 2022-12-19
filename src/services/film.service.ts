import { IFilm } from "../interfaces/film.interface";
import { GetTrendingResponse, HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

export function mapFilmResults(results: []) {
    const films = results.map((film: IFilm) => {
        const _poster_path = film.poster_path ? film.poster_path : film.backdrop_path;
        return {
            poster_path: _poster_path,
            adult: film.adult,
            overview: film.overview,
            release_date: film.release_date,
            genre_id: film.genre_id,
            origin_title: film.original_title,
            original_language: film.original_language,
            vote_count: film.vote_count,
            vote_average: film.vote_average,
            video: film.video,
            id: film.id,
            media_type: film.media_type ,
            title: film.title,
            name: film.name,
            backdrop_path: film.backdrop_path,
            popularity: film.popularity,
        }
    });

    return films;
}

export async function getTrendingFilms(): Promise<IFilm[]> {
    const apiKey = process.env.REACT_APP_API_V3_AUTH;
    const url = `/trending/all/week?api_key=${apiKey}`;
    try {
        const response = await rest<GetTrendingResponse>(HttpMethod.GET, url);
        console.log(response)
        return mapFilmResults(response.data.results)
            .sort((a, b) => {
                const aPop = a.popularity || 0;
                const bPop = b.popularity || 0;
                return aPop - bPop
            }
            );
    } catch (error) {
        console.error(error);
        return [];
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
        return [];
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
        return [];
    }
}