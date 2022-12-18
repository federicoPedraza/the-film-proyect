export enum MediaType {
    Movie = "movie", TV = "tv"
}

export interface IFilm {
    id?: number;
    media_type?: MediaType;
    title?: string;
    name?: string;
    popularity?: number;
    poster_path?: string;
    favorite?: boolean;
}
  