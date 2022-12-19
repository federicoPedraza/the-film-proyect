import { Fab, Paper, Typography } from "@material-ui/core";
import { Box, Grid, Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { IFilm } from "../../interfaces/film.interface";
import { FilmViewerStyles, UIStyles } from "../../theme/globalStyles";
import { applyOptions, SIMPLIFIED_FILM_RANGE } from "../../utils/film-helper";
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { Film } from "./film";
import { FilmViewerSimplified } from "./film-viewer-simplified";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion'

const MotionGrid = motion(Grid)

export const FilmViewer: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label, options } = props;
    const { filmViewerContainer, filmViewerTitle, filmClass, filmViewer, filmViewerHeader, filmViewerFilterButton } = FilmViewerStyles();
    const [ filmsToShow, setFilmsToShow ] = useState<IFilm[] | null>([])
    const [ sortingVisible, setSortingVisible ] = useState(false);

    //Filtering and sorting
    useEffect(() => {
        if (options && films) {
            setFilmsToShow(applyOptions(options, films));
        } else {
            setFilmsToShow(films);
        }
    }, [options, films])

    const handleOnMouseEnter = () => {
        setSortingVisible(true);
    }

    const handleOnMouseLeave = () => {
        setSortingVisible(false);
    }

    /*
        Check if there should be an skeleton waiting for values.
        After checking for skeletons, it checks if the amount of films is worth of placing a full film viewer
        Or just a simplified version of it
    */
    if (filmsToShow) {
        if (filmsToShow?.length < SIMPLIFIED_FILM_RANGE[1]) {
            if (filmsToShow?.length > SIMPLIFIED_FILM_RANGE[0]) {
                return <FilmViewerSimplified films={filmsToShow} label={label} />
            }
            return null
        }
    } else {
        return <FilmViewerSkeleton />
    }
    const staggerChildren = (films: IFilm[]) => {
        const initialDelay = 0.2 + Math.random() * 1
        return films.map((film, index) => {
            return {
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 1,
                transition: {
                delay: index * 0.2 + initialDelay,
                duration: 0.2,
                ease: 'easeInOut'
                }
            }
            }
        })
    }
    const childrenVariants = staggerChildren(filmsToShow)
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
                            <AnimatePresence>

                            {filmsToShow?.map((film, index) => {
                                return <MotionGrid key={index} item initial="hidden" animate="visible" variants={childrenVariants[index]}>
                                        <Film data={film}/>
                                    </MotionGrid>
                            })}
                            </AnimatePresence>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

export const FilmViewerSkeleton = () => {
    return (
        <Box style={{ height: "280px" }}>
            <Skeleton className={FilmViewerStyles().filmViewerContainer} variant="rectangular" sx={{bgcolor: 'grey.900', height: "180px"  }}  />
        </Box>
    )
}