import { Paper, Typography } from "@material-ui/core";
import { Box, Grid, Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { IFilm } from "../../interfaces/film.interface";
import { FilmViewerStyles } from "../../theme/globalStyles";
import { applyOptions } from "../../utils/film-helper";
import { Film } from "./film";

export const FilmViewerExtended: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label, alternativeLabel = '', options } = props;
    const { filmViewerContainer, filmViewerTitle, filmClass, filmViewer } = FilmViewerStyles();
    const [ filmsToShow, setFilmsToShow ] = useState<IFilm[] | null>([]);

    useEffect(() => {
        if (options && films) {
            setFilmsToShow(applyOptions(options, films));
        } else {
            setFilmsToShow(films);
        }
    }, [options, films])

    const hasFilms = () => {
        return films ? films.length > 0 : false;
    }

    return (
        <>
            <Typography className={filmViewerTitle} variant="h6">{hasFilms() ? label : alternativeLabel}</Typography>
            {!hasFilms() ?
            (
                <Box>
                    <Skeleton className={filmViewerContainer} variant="rectangular" sx={{bgcolor: 'grey.900', height: "180px"  }}  />
                </Box>
            ) :
            (<Paper elevation={20} className={filmViewerContainer} style={{ zIndex: "-1" }}>
                <div className={filmViewer}>
                    <Grid container spacing={2} m={1}>
                        <Grid item xs>
                            <Grid className={filmClass} container spacing={2} wrap="wrap">
                                {filmsToShow?.map((film, index) => {
                                    if (film.poster_path)
                                    return <Grid key={index} item>
                                            <Film data={film}></Film>
                                        </Grid>
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Paper>)}
        </>
    );
}   