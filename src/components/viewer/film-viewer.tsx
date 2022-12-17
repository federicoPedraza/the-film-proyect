import { Button, Card, IconButton, Typography } from "@material-ui/core";
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Box, Grid } from "@mui/material";
import { FC, useState } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { UIStyles } from "../../theme/globalStyles";
import { Film } from "../models/film";


export const FilmViewer: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label } = props;
    const { filmViewerContainer, filmViewerTitle, filmViewer } = UIStyles();
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const filmsPerSlide = 6;
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
        <Box>
            <Typography className={filmViewerTitle} variant="h2">{label}</Typography>
            <div style={{ position: 'relative', height: "380" }} className="box-overflow-x">
                <IconButton onClick={handlePreviousClick} style={{ position: 'absolute', top: '0', left: '0'}}>
                    <NavigateBeforeRoundedIcon />
                </IconButton>
                <Grid className={filmViewer} container spacing={4} wrap="nowrap">
                    {filmsToShow?.map((film, index) => {
                        return <Grid key={index} item>
                                <Film poster_path={film.poster_path} title={film.title}></Film>
                            </Grid>
                    })}
                </Grid>
                <IconButton onClick={handleNextClick} style={{ position: 'absolute', top: '0', right: '0'}}>
                    <NavigateNextRoundedIcon />
                </IconButton>
            </div>
        </Box>
    );
}   