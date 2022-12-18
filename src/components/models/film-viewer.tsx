import { Paper, Typography } from "@material-ui/core";
import { Box, Grid, Skeleton } from "@mui/material";
import { FC, useState } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { UIStyles } from "../../theme/globalStyles";
import { Film } from "./film";
import { NavigationButton, NavigationDirection } from "../ui/navigation-button";

export const FilmViewer: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label } = props;
    const { filmViewerContainer, filmViewerTitle, filmClass, filmViewer } = UIStyles();
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const filmsPerSlide = 8;
    const filmsPerCarrousel = filmsPerSlide - 1;
    
    const handlePreviousClick = () => {
        if (!films) return;
        setCurrentIndex((currentIndex - filmsPerCarrousel + films.length) % films.length);
    }

    const handleNextClick = () => {
        if (!films) return;
        setCurrentIndex((currentIndex + filmsPerCarrousel) % films.length);
    }

    let filmsToShow = films ? films?.slice(currentIndex, currentIndex + filmsPerSlide) : [];
    const filmsMissing = filmsPerSlide - filmsToShow.length;

    if (filmsMissing > 0 && films != undefined) {
        filmsToShow = [...filmsToShow, ...films?.slice(0, filmsMissing)];
    }

    return (
        (!films ? 
            <Box>
                <Skeleton className={filmViewerContainer} variant="rectangular" sx={{bgcolor: 'grey.900', height: "180px"  }}  />
            </Box> :
        <Paper elevation={20} className={filmViewerContainer} style={{ height: 240, zIndex: "-1" }}>
            <Typography className={filmViewerTitle} variant="h5">{label}</Typography>
            <div className={filmViewer}>
                <Grid container spacing={2} >
                    <Grid item>
                        <NavigationButton onButtonClick={handlePreviousClick} direction={NavigationDirection.LEFT} />
                    </Grid>
                    <Grid item xs>
                        <Grid className={filmClass} container spacing={2} wrap="nowrap">
                            {filmsToShow?.map((film, index) => {
                                return <Grid key={index} item>
                                        <Film data={film}/>
                                    </Grid>
                            })}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <NavigationButton onButtonClick={handleNextClick} direction={NavigationDirection.RIGHT} />
                    </Grid>
                </Grid>
            </div>
        </Paper>)
    );
}   