import { Paper, Typography } from "@material-ui/core";
import { Box, Grid, Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { UIStyles } from "../../theme/globalStyles";
import { Film } from "./film";

export const FilmViewerExtended: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label } = props;
    const { filmViewerContainer, filmViewerTitle, filmClass, filmViewer } = UIStyles();

    const hasFilms = () => {
        return films ? films.length > 0 : false;
    }

    return (
        <>
            <Typography className={filmViewerTitle} variant="h5">{label}</Typography>
            {!hasFilms() ?
            (
                <Box>
                    <Skeleton className={filmViewerContainer} variant="rectangular" sx={{bgcolor: 'grey.900', height: "180px"  }}  />
                </Box>
            ) :
            (<Paper elevation={20} className={filmViewerContainer} style={{ height: 280, zIndex: "-1" }}>
                <div className={filmViewer}>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Grid className={filmClass} container spacing={2} wrap="nowrap">
                                {films?.map((film, index) => {
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