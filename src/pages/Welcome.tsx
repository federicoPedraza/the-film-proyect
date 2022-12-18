import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { FilmViewer } from "../components/models/film-viewer";
import { FilmViewerExtended } from "../components/models/film-viewer-extended";
import { SearchField } from "../components/ui/search-field";
import { IFilm } from "../interfaces/film.interface";
import { getDiscoverMovies, getDiscoverTVShows, getFilmsByName, getTrendingFilms } from "../services/film.service";

const Welcome: FC<{}> = () => {
  const [trendingFilms, setTrendingFilms] = useState<IFilm[]>([]);
  const [discoverMovies, setDiscoverMovies] = useState<IFilm[]>([]);
  const [discoverTVShows, setDiscoverTVShows] = useState<IFilm[]>([]);

  const [searchedFilms, setSearchedFilms] = useState<IFilm[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleInitialCall = async () => {
    const trendFilms = await getTrendingFilms();
    const discoverMovies = await getDiscoverMovies();
    const discoverTVShows = await getDiscoverTVShows();
    setTrendingFilms(trendFilms);
    setDiscoverMovies(discoverMovies);
    setDiscoverTVShows(discoverTVShows);
  } 
  
  const isSearching = searchValue.length > 2;
  const handleSearchChange = async (event: any) => {
    setSearchValue(event.target.value);

    if (!isSearching) {
      setSearchedFilms([]);
      return;
    }

    const matchingFilms = await getFilmsByName(searchValue);
    console.log(matchingFilms);
    setSearchedFilms(matchingFilms);
  }


  useEffect(() => {
    handleInitialCall();
  }, []);

  return (  
    <Box sx={{ margin: '30px' }}>
      <SearchField onSearchChange={handleSearchChange} />
      {(isSearching) ? (
        <FilmViewerExtended alternativeLabel={`No results found (${ searchValue })`} label={`Searched: ${ searchValue }`} films={searchedFilms} />
      ) : (
        <Box>
          <FilmViewer alternativeLabel="Trendings" label="Trendings" films={trendingFilms} />
          <FilmViewer alternativeLabel="Latests movies" label="Latests movies" films={discoverMovies} />
          <FilmViewer alternativeLabel="Latests tv shows" label="Latests tv shows" films={discoverTVShows} />
          <FilmViewer alternativeLabel="" label="Hey" films={null} />
        </Box>
        )}
    </Box>
  );
};
export default Welcome