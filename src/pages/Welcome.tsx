import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Box } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { FilmViewer } from "../components/models/film-viewer";
import { FilmViewerExtended } from "../components/models/film-viewer-extended";
import { HomeFilterField } from "../components/ui/home-filter-field";
import { SearchField } from "../components/ui/search-field";
import { IFilmViewer } from "../interfaces/film-viewer.interface";
import { IFilm, MediaType } from "../interfaces/film.interface";
import { IGenre } from "../interfaces/genre.interface";
import { getDiscoverMovies, getDiscoverTVShows, getFilmsByName, getMovieGenresList, getTrendingFilms } from "../services/film.service";

const Welcome: FC<{}> = () => {
  const [filterValue, setFilterValue] = useState<MediaType | null>(null);

  const [searchedFilms, setSearchedFilms] = useState<IFilm[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  
  const [filmCarrousel, setFilmCarrousel] = useState<IFilmViewer[]>([]);

  const [ displayedGenres, setDisplayedGenres ] = useState<IGenre[]>([]);

  const handleInitialCall = async () => {
    const _trendingFilms = await getTrendingFilms();
    const _discoverMovies = await getDiscoverMovies();
    const _discoverTVShows = await getDiscoverTVShows();

    const _newFilms = await getNewFilmViewers(2);
    setFilmCarrousel([
      { films: _trendingFilms, label: "Trending" },
      { films: _discoverMovies, label: "Movies" },
      { films: _discoverTVShows, label: "TV Shows" },
      ..._newFilms
    ])

    setFilterValue(MediaType.All);
  } 

  const getNewFilmViewers = async (amount: number): Promise<IFilmViewer[]>  => {
      const genres = await getMovieGenresList();
      const availableGenres = genres.filter((genre) => !displayedGenres.includes(genre) );
      const promises = ([
        Array.from({ length: amount }, () => {
            const randomGenre = availableGenres[Math.floor(Math.random() * availableGenres.length)];
            setDisplayedGenres([...displayedGenres, randomGenre]);
            return getDiscoverMovies([randomGenre.id?.toString() || '0']).then(films => ({
              films, label: `${randomGenre.name} movies`, genre: randomGenre, media_type: MediaType.Movie
            }))
        }),
        Array.from({ length: amount }, () => {
          const randomGenre = availableGenres[Math.floor(Math.random() * availableGenres.length)];
          setDisplayedGenres([...displayedGenres, randomGenre]);
          return getDiscoverTVShows([randomGenre.id?.toString() || '0']).then(films => ({
            films, label: `${randomGenre.name} tv shows`, genre: randomGenre, media_type: MediaType.TV
          }))
        }),
      ]).flat();

      const newFilms = await Promise.all(promises);
      
      return newFilms as IFilmViewer[];
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
    const updatedCarrousel = filmCarrousel.map((film) => {
      return {
        ...film,
        options: { media: filterValue}
      };      
    });

    setFilmCarrousel(updatedCarrousel);
  }, [filterValue]);

  useEffect(() => {
    handleInitialCall();
  }, []);

  return (  
    <Box sx={{ margin: '30px' }}>
      <SearchField onSearchChange={handleSearchChange} />
      <HomeFilterField onFilterChange={handleFilterChange} />
      {(isSearching) ? (
        <FilmViewerExtended alternativeLabel={`No results found (${ searchValue })`} label={`Searched: (${ searchValue })`} films={searchedFilms} options={ { media: filterValue } } />
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