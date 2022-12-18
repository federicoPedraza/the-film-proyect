import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { FilmViewer } from "../components/models/film-viewer";
import { FilmViewerSimplified } from "../components/models/film-viewer-simplified";
import { IFilm } from "../interfaces/film.interface";
import { getDiscoverMovies, getDiscoverTVShows, getTrendingFilms } from "../services/film.service";

const Welcome: FC<{}> = () => {
  const [trendingFilms, setTrendingFilms] = useState<IFilm[]>([]);
  const [discoverMovies, setDiscoverMovies] = useState<IFilm[]>([]);
  const [discoverTVShows, setDiscoverTVShows] = useState<IFilm[]>([]);

  const handleInitialCall = async () => {
    const trendFilms = await getTrendingFilms();
    const discoverMovies = await getDiscoverMovies();
    const discoverTVShows = await getDiscoverTVShows();
    setTrendingFilms(trendFilms);
    setDiscoverMovies(discoverMovies);
    setDiscoverTVShows(discoverTVShows);
  } 

  useEffect(() => {
    handleInitialCall();
  }, []);

  return (
    <Box sx={{ margin: '30px' }}>
      <FilmViewer label="Trendings" films={trendingFilms} />
      <FilmViewer label="Latests movies" films={discoverMovies} />
      <FilmViewer label="Latests tv shows" films={discoverTVShows} />
      <FilmViewer label="Hey" films={null} />
    </Box>
  );
};
export default Welcome