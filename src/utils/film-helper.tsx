import { IFilm } from "../interfaces/film.interface";

export const getImage = (posterUrl?: string) => {
    if ( !posterUrl ){
        return 'https://www.solidbackgrounds.com/images/1024x768/1024x768-gray-web-gray-solid-color-background.jpg'
    }
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

    //to do, but the api has no dates.
    return films.sort((a, b) => {
        const aPop = a.popularity || 0;
        const bPop = b.popularity || 0;
        return aPop - bPop
    });
}