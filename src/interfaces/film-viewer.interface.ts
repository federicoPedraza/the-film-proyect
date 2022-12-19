import { IFilmViewerOptions } from "./film-viewer-options.interface";
import { IFilm, MediaType } from "./film.interface";
import { IGenre } from "./genre.interface";

export interface IFilmViewer {
    label: string | null;
    alternativeLabel?: string;
    options?: IFilmViewerOptions,
    films: IFilm[] | null;
    genre?: IGenre;
    media_type?: MediaType | MediaType.All;
}
  