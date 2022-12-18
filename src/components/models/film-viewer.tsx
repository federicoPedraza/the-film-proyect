import { Paper, Typography } from "@material-ui/core";
import { Box, Grid, Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { UIStyles } from "../../theme/globalStyles";
import { Film } from "./film";

export const FilmViewer: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label } = props;
    const { filmViewerContainer, filmViewerTitle, filmClass, filmViewer } = UIStyles();
    const [ scrollPosition, setScrollPosition ] = useState(0);
    let rafId: number | null = null;

    const handleScroll = (event: any) => {
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
        }

        rafId = requestAnimationFrame(() => {
            setScrollPosition(event.target.scrollLeft + 5);
        })
    }

    useEffect(() => {
        return () => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        }
    }, [])

    const hasFilms = () => {
        return films ? films.length > 0 : false;
    }

    return (
        (!hasFilms() ?
            <Box>
                <Skeleton className={filmViewerContainer} variant="rectangular" sx={{bgcolor: 'grey.900', height: "180px"  }}  />
            </Box> :
        <Paper elevation={20} onScroll={handleScroll} className={filmViewerContainer} style={{ height: 280, zIndex: "-1" }}>
            <Typography className={filmViewerTitle} style={{ left: `${scrollPosition}px`}} variant="h5">{label}</Typography>
            <div className={filmViewer}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Grid className={filmClass} container spacing={2} wrap="nowrap">
                            {films?.map((film, index) => {
                                return <Grid key={index} item>
                                        <Film poster_path={film.poster_path} title={film.title}></Film>
                                    </Grid>
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Paper>)
    );
}   