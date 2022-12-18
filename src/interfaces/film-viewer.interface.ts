import { IFilm } from "./film.interface";

export interface IFilmViewer {
    label: string | null;
    alternativeLabel: string | null;
    films: IFilm[] | null;
}
  