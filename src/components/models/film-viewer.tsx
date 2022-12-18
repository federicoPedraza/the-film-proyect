import { Paper, Typography } from "@material-ui/core";
import { Box, Grid, Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { IFilm } from "../../interfaces/film.interface";
import { UIStyles } from "../../theme/globalStyles";
import { sortByDate, sortByPopularity } from "../../utils/film-helper";
import { Film } from "./film";

export const FilmViewer: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label, options } = props;
    const { filmViewerContainer, filmViewerTitle, filmClass, filmViewer } = UIStyles();
    const [ filmsToShow, setFilmsToShow ] = useState<IFilm[] | null>([])
    
    //Filtering and sorting
    useEffect(() => {
        console.log(options);
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

    return (
        (!hasFilms() ?
            <Box>
                <Skeleton className={filmViewerContainer} variant="rectangular" sx={{bgcolor: 'grey.900', height: "180px"  }}  />
            </Box> :
        <Paper elevation={20} className={filmViewerContainer} 
        style={{ height: 280, zIndex: "-1" }}>
            <Typography className={filmViewerTitle} variant="h5">{label}</Typography>
            <div className={filmViewer}>
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
            </div>
        </Paper>)
    );
}   