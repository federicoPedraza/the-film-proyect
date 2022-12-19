import { IFilm, MediaType } from "../interfaces/film.interface";
import { sortByPopularity } from "../utils/film-helper";
import { ApiResponse, GetFilmsResponse, HttpMethod, PaginatedResponse } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";
import { IGenre } from "../interfaces/genre.interface";
const API_KEY = process.env.react_app_api_v3_auth;

export function mapFilmResults(results: IFilm[]) {
    const films = results.map((film: IFilm) => {
        const _poster_path = film.poster_path ? film.poster_path : film.backdrop_path;
        const _media_type = film.media_type ? film.media_type : ((film.title != null ? MediaType.Movie : MediaType.TV))
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
            media_type: _media_type ,
            title: film.title,
            name: film.name,
            backdrop_path: film.backdrop_path,
            popularity: film.popularity,
        }
    });

    return films;
}
export async function getFavoriteFilms(account_id: number, session_id: string, film_type: MediaType  ):Promise<ApiResponse<PaginatedResponse<IFilm>>>{
    const isMovie = film_type === 'tv' ? 'tv' : 'movies'
    const url = `account/${account_id}/favorite/${isMovie}?api_key=${API_KEY}&session_id=${session_id}`;
    try {
        const response = await rest<PaginatedResponse<IFilm>>(HttpMethod.GET, url);
        return response
    } catch (error) {
        console.error(error);
        throw error
    }
}
export async function getWatchlist(account_id: number, session_id: string, film_type: MediaType  ):Promise<ApiResponse<PaginatedResponse<IFilm>>>{
    const isMovie = film_type === 'tv' ? 'tv' : 'movies'
    const url = `account/${account_id}/watchlist/${isMovie}?api_key=${API_KEY}&session_id=${session_id}`;
    try {
        const response = await rest<PaginatedResponse<IFilm>>(HttpMethod.GET, url);
        return response
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function getFilmsByName(searchValue: string): Promise<IFilm[]> {
    const url = `/search/multi?api_key=${API_KEY}&query=${searchValue}`;
    try {
        const response = await rest<GetFilmsResponse>(HttpMethod.GET, url);
        return mapFilmResults(response.data.results);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getTrendingFilms(): Promise<IFilm[]> {
    const url = `/trending/all/week?api_key=${API_KEY}`;
    try {
        const response = await rest<GetFilmsResponse>(HttpMethod.GET, url);
        return sortByPopularity(mapFilmResults(response.data.results));
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getDiscoverMovies(gnres?: string[]): Promise<IFilm[]> {
    const joinedGnres = gnres?.join(',');
    const url = `/discover/movie?api_key=${API_KEY}${gnres ? `&with_genres=${joinedGnres}` : ''}` ;
    try {
        const response = await rest<GetFilmsResponse>(HttpMethod.GET, url);
        return mapFilmResults(response.data.results);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getDiscoverTVShows(gnres?: string[]): Promise<IFilm[]> {
    const joinedGnres = gnres?.join(',');
    const url = `/discover/tv?api_key=${API_KEY}${gnres ? `&with_genres=${joinedGnres}` : ''}` ;
    try {
        const response = await rest<GetFilmsResponse>(HttpMethod.GET, url);
        return mapFilmResults(response.data.results);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getMovieGenresList(): Promise<IGenre[]> {
    const url = `/genre/movie/list?api_key=${API_KEY}`;

    try {
        const response = await rest<any>(HttpMethod.GET, url);
        return response.data.genres;
    } catch (error) {
        console.error(error);
        return [];
    }
}