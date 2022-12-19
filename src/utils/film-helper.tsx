import { IFilmViewerOptions } from "../interfaces/film-viewer-options.interface";
import { IFilm } from "../interfaces/film.interface";
import { IGenre } from "../interfaces/genre.interface";

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
        return bPop - aPop
    });
}

export const applyOptions = (options: IFilmViewerOptions, films: IFilm[]): IFilm[] => {
    let _films = films;
    
    if ((options?.media ?? 'all') !== 'all')  {
        _films = _films?.filter((film) => film.media_type == options?.media);
    }

    if (options?.sortByPopularity)
        _films = sortByPopularity(_films);

    if (options?.sortByDate)
        _films = sortByDate(_films);

    return _films;
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