import { IFilm } from "./film.interface";

export interface IFilmViewer {
    label: string | null;
    films: IFilm[] | null;
}
  