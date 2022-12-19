export enum MediaType {
    All = 'all', Movie = 'movie', TV = 'tv'
}

//https://developers.themoviedb.org/3/discover/movie-discover
export interface IFilm {
    poster_path?: string;
    adult?: boolean,
    overview?: string,
    release_date?: string,
    genre_id?: number[],
    original_title?: string,
    original_language?: string,
    vote_count?: number,
    vote_average?: number,
    tagline?: string;
    video?: boolean,
    id?: number;
    media_type?: MediaType;
    title?: string;
    name?: string;
    popularity?: number;
    backdrop_path?: string;
    favorite?: boolean;
}
  