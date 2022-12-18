import { MediaType } from "./film.interface";

export interface IFilmViewerOptions {
    media?: MediaType;
    sortByPopularity?: boolean;
    sortByDate?: boolean;
}
  