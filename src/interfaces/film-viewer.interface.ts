import { IFilm } from "./film.interface";

export interface IFilmViewer {
    label: string | null;
    alternativeLabel?: string;
    films: IFilm[] | null;
}
  