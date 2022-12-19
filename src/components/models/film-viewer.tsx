import { Fab, Paper, Typography } from "@material-ui/core";
import { Box, Grid, Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { IFilm } from "../../interfaces/film.interface";
import { UIStyles } from "../../theme/globalStyles";
import { sortByDate, sortByPopularity } from "../../utils/film-helper";
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { Film } from "./film";

export const FilmViewer: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label, options } = props;
    const { filmViewerContainer, filmViewerTitle, filmClass, filmViewer, filmViewerHeader, filmViewerFilterButton } = UIStyles();
    const [ filmsToShow, setFilmsToShow ] = useState<IFilm[] | null>([])
    const [ sortingVisible, setSortingVisible ] = useState(false);

    //Filtering and sorting
    useEffect(() => {
        if (options && films) {
            let _films = films;
            if (options?.media) 
                _films = _films?.filter((film) => film.media_type == options?.media);
    
            if (options?.sortByPopularity)
                _films = sortByPopularity(_films);

            if (options?.sortByDate)
                _films = sortByDate(_films);
            
            setFilmsToShow(_films);
        } else {
            setFilmsToShow(films);
        }
    }, [options, films])

    const hasFilms = () => {
        return films ? films.length > 0 : false;
    }

    const handleOnMouseEnter = () => {
        setSortingVisible(true);
    }

    const handleOnMouseLeave = () => {
        setSortingVisible(false);
    }

    if (!hasFilms()) {
        return (
            <Box style={{ height: "280px" }}>
                <Skeleton className={filmViewerContainer} variant="rectangular" sx={{bgcolor: 'grey.900', height: "180px"  }}  />
            </Box>
        );
    }

    return (
        <Paper onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}  elevation={20} className={filmViewerContainer} 
        style={{ height: "300px", zIndex: "-1" }}>
            <Box className={filmViewerHeader}>
                <Typography className={filmViewerTitle} variant="h5">{label?.toUpperCase()}</Typography>
                <Box style={{ visibility: sortingVisible ? "visible" : "hidden" }}>
                    <Fab size="small" className={filmViewerFilterButton}>
                        <FilterListRoundedIcon fontSize="small" />
                    </Fab>
                </Box>
            </Box>
            <Box className={filmViewer}>
                <Grid container spacing={2} >
                    <Grid item>
                        <Grid className={filmClass} container spacing={2} wrap="nowrap">
                            {filmsToShow?.map((film, index) => {
                                return <Grid key={index} item>
                                        <Film data={film}/>
                                    </Grid>
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}   