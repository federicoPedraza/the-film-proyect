import { IFilm } from "../interfaces/film.interface";

export const getImage = (posterUrl?: string) => {
    return `https://image.tmdb.org/t/p/w500${posterUrl}`;
}

export const sortByPopularity = (films: IFilm[] | null): IFilm[] => {
    if (!films) {
        return [];
    }

    return films.sort((a, b) => {
        const aPop = a.popularity || 0;
        const bPop = b.popularity || 0;
        return bPop - aPop
    });
}

export const SCROLLCAP_PER_REINFORCMENT = 200;
export const POPULAR_THRESHOLD = 4000;
export const SIMPLIFIED_FILM_RANGE = [ 0, 5 ]

export const isFilmPopular = (popularity?: number): boolean => (popularity || 0) > POPULAR_THRESHOLD;

export const sortByDate = (films: IFilm[] | null): IFilm[] => {
    if (!films) {
        return [];
    }

    //to do, but the api has no dates.
    return films.sort((a, b) => {
        const aPop = a.popularity || 0;
        const bPop = b.popularity || 0;
        return aPop - bPop
    });
}