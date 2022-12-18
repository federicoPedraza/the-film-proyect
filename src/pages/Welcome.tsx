import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { FilmViewer } from "../components/models/film-viewer";
import { FilmViewerExtended } from "../components/models/film-viewer-extended";
import { SearchField } from "../components/ui/search-field";
import { IFilmViewer } from "../interfaces/film-viewer.interface";
import { IFilm } from "../interfaces/film.interface";
import { getDiscoverMovies, getDiscoverTVShows, getFilmsByName, getTrendingFilms } from "../services/film.service";

const Welcome: FC<{}> = () => {
  const [searchedFilms, setSearchedFilms] = useState<IFilm[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const [filmCarrousel, setFilmCarrousel] = useState<IFilmViewer[]>([]);

  const handleInitialCall = async () => {
    const _trendingFilms = await getTrendingFilms();
    const _discoverMovies = await getDiscoverMovies();
    const _discoverTVShows = await getDiscoverTVShows();

    setFilmCarrousel([ 
      { label: "Trendings", films: _trendingFilms },  
      { label: "Latests movies", films: _discoverMovies },  
      { label: "Latests tv shows", films: _discoverTVShows },
      { label: "Hey", films: null },
    ]);
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
          {(filmCarrousel.map((film) => {
            return <FilmViewer label={film.label} films={film.films}></FilmViewer>
          }))}
        </Box>
        )}
    </Box>
  );
};
export default Welcome