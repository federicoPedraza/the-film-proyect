import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { FilmViewer } from "../components/models/film-viewer";
import { IFilm } from "../interfaces/film.interface";
import { getTrendingFilms } from "../services/film.service";

const Welcome: FC<{}> = () => {
  const [trendingFilms, setTrendingFilms] = useState<IFilm[]>([]);

  const handleInitialCall = async () => {
    const films = await getTrendingFilms();
    setTrendingFilms(films);
  } 

  useEffect(() => {
    handleInitialCall();
  }, []);

  return (
    <Box sx={{ margin: '30px' }}>
      <FilmViewer label="Trending" films={trendingFilms} />
    </Box>
  );
};
export default Welcome