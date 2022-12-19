import { Box } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { FilmViewer } from "../components/models/film-viewer";
import { FilmViewerExtended } from "../components/models/film-viewer-extended";
import { HomeFilterField } from "../components/ui/home-filter-field";
import { SearchField } from "../components/ui/search-field";
import { IFilmViewer } from "../interfaces/film-viewer.interface";
import { IFilm, MediaType } from "../interfaces/film.interface";
import { getDiscoverMovies, getDiscoverTVShows, getFilmsByName, getTrendingFilms } from "../services/film.service";

const Welcome: FC<{}> = () => {
  const [filterValue, setFilterValue] = useState<MediaType | null>(null);

  const [searchedFilms, setSearchedFilms] = useState<IFilm[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  
  const [filmCarrousel, setFilmCarrousel] = useState<IFilmViewer[]>([]);
  
  const [trendingFilms, setTrendingFilms] = useState<IFilm[]>([]);
  const [discoverMovies, setDiscoverMovies] = useState<IFilm[]>([]);
  const [discoverTVShows, setDiscoverTVShows] = useState<IFilm[]>([]);

  const handleInitialCall = async () => {
    const _trendingFilms = await getTrendingFilms();
    const _discoverMovies = await getDiscoverMovies();
    const _discoverTVShows = await getDiscoverTVShows();

    setTrendingFilms(_trendingFilms);
    setDiscoverMovies(_discoverMovies);
    setDiscoverTVShows(_discoverTVShows);

    setFilterValue(MediaType.All);
  } 

  //Filter
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.defaultValue) {
      case MediaType.Movie:
        setFilterValue(MediaType.Movie);
        break;
      case MediaType.TV:
        setFilterValue(MediaType.TV);
        break;
      default:
        setFilterValue(null);
        break;
    }
  }
  
  //Search
  const minSearchValueLength = 2;
  const isSearching = searchValue.length > minSearchValueLength;
  const handleSearchChange = async (event: any) => {
    setSearchValue(event.target.value);

    if (searchValue.length < minSearchValueLength) {
      setSearchedFilms([]);
      return;
    }

    const matchingFilms = await getFilmsByName(searchValue);
    setSearchedFilms(matchingFilms);
  }

  /*
  useEffect(() => {
    if (favoriteMovies.length > 0) {
      setFilmCarrousel([...filmCarrousel, {  label: "Favorite movies", films: favoriteMovies }]);
    }
  }, [favoriteMovies]);
  */

  useEffect(() => {
    setFilmCarrousel([ 
      { label: "Trendings", films: trendingFilms, options: { media: filterValue }},  
      { label: "Latests movies", films: discoverMovies, options: { media: filterValue } },  
      { label: "Latests tv shows", films: discoverTVShows, options: { media: filterValue } },
    ]);
  }, [filterValue])

  useEffect(() => {
    handleInitialCall();
  }, []);

  return (  
    <Box sx={{ margin: '30px' }}>
      <SearchField onSearchChange={handleSearchChange} />
      <HomeFilterField onFilterChange={handleFilterChange} />
      {(isSearching) ? (
        <FilmViewerExtended alternativeLabel={`No results found (${ searchValue })`} label={`Searched: (${ searchValue })`} films={searchedFilms} />
      ) : (
        <Box>
          {(filmCarrousel.map((filmViewers, index) => {
            return <FilmViewer key={index} options={filmViewers.options} label={filmViewers.label} films={filmViewers.films}></FilmViewer>
          }))}
        </Box>
        )}
    </Box>
  );
};
export default Welcome