import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { FilmViewer } from "../components/models/film-viewer";
import { FilmViewerExtended } from "../components/models/film-viewer-extended";
import { FilmViewerSimplified } from "../components/models/film-viewer-simplified";
import { IFilm } from "../interfaces/film.interface";
import { getDiscoverMovies, getDiscoverTVShows, getTrendingFilms } from "../services/film.service";

const Search: FC<{}> = () => {
    const [matchedFilms, setMatchedFilms] = useState<IFilm[]>([]);

  return (
    <Box sx={{ margin: '30px' }}>
      <FilmViewerExtended label="Searched: hola" films={[]} />
      <FilmViewer label="Hey" films={null} />
    </Box>
  );
};
export default Search