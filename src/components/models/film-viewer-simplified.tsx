import { Typography } from "@material-ui/core";
import { Box, Grid, Skeleton } from "@mui/material";
import { FC } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { FilmViewerStyles, UIStyles } from "../../theme/globalStyles";
import { Film } from "./film";

export const FilmViewerSimplified: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label } = props;
    const { filmViewerTitle, filmClass, filmViewer } = UIStyles();
    const { filmViewerSimplifiedContainer } = FilmViewerStyles();

    return (
        (!films ? 
            <Box>
                <Skeleton className={filmViewerSimplifiedContainer} variant="rectangular" sx={{bgcolor: 'grey.900', height: "180px"  }}  />
            </Box> :
        <Box className={filmViewerSimplifiedContainer} style={{ height: 240, zIndex: "-1" }}>
            <Typography className={filmViewerTitle} variant="h5">{label}</Typography>
            <div className={filmViewer}>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <Grid className={filmClass} container spacing={2} wrap="nowrap">
                            {films?.map((film, index) => {
                                return <Grid key={index} item>
                                        <Film data={film}/>
                                    </Grid>
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Box>)
    );
}   