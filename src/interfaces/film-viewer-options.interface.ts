import { MediaType } from "./film.interface";

export interface IFilmViewerOptions {
    media?: MediaType | null;
    sortByPopularity?: boolean;
    sortByDate?: boolean;
}
  