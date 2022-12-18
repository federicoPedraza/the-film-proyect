import { IFilmViewerOptions } from "./film-viewer-options.interface";
import { IFilm } from "./film.interface";

export interface IFilmViewer {
    label: string | null;
    alternativeLabel?: string;
    options?: IFilmViewerOptions,
    films: IFilm[] | null;
}
  