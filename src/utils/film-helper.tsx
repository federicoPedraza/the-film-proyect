import { IFilm } from "../interfaces/film.interface";

export const getPoster = (posterUrl?: string) => {
    return `https://image.tmdb.org/t/p/w500${posterUrl}`;
}

export const sortByPopularity = (films: IFilm[] | null): IFilm[] => {
    if (!films) {
        return [];
    }

    return films.sort((a, b) => {
        const aPop = a.popularity || 0;
        const bPop = b.popularity || 0;
        return aPop - bPop
    });
}

export const sortByDate = (films: IFilm[] | null): IFilm[] => {
    if (!films) {
        return [];
    }

    return films.sort((a, b) => {
        const aPop = a.popularity || 0;
        const bPop = b.popularity || 0;
        return aPop - bPop
    });
}