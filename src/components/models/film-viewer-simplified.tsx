import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { FilmViewerStyles } from "../../theme/globalStyles";
import { FilmSimplified } from "./film-simplified";

export const FilmViewerSimplified: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label } = props;
    const { filmViewerSimplifiedContainer } = FilmViewerStyles();
    const { filmViewerTitle, filmClass, filmViewer, filmViewerHeader } = FilmViewerStyles();

    return (
        <Box className={filmViewerSimplifiedContainer} 
        style={{ height: "400", zIndex: "-1" }}>
            <Box className={filmViewerHeader}>
                <Typography className={filmViewerTitle} variant="h5">{label?.toUpperCase()}</Typography>
            </Box>
            <Box className={filmViewer}>
                <Grid container spacing={2} >
                    <Grid item>
                        <Grid className={filmClass} container spacing={5} wrap="nowrap">
                            {films?.map((film, index) => {
                                return <Grid key={index} item>
                                        <FilmSimplified data={film}/>
                                    </Grid>
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}   