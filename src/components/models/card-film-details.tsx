import { Box, CardMedia, Container, IconButton, Paper, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { FC } from "react";
import { IFilm } from "../../interfaces/film.interface";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getImage, isFilmPopular } from "../../utils/film-helper";
import { FavoriteButton } from "../ui/favorite-button";

export const CardFilmDetails:FC<{data: IFilm}> = ({data}) => {
    const {
    poster_path,
    adult,
    overview,
    release_date,
    genre_id,
    original_title,
    original_language,
    vote_count,
    vote_average,
    video,
    id,
    media_type,
    title,
    name,
    popularity,
    backdrop_path } = data;
    return (
        <Box style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Container style={{ padding: '10px', width: '100%' }}>
                <Typography variant="caption" component="p">{title || name}</Typography>
            </Container>
            <Grid style={{ backgroundColor: '#19191940',width: '100%', height: '100%', padding: '0px 10px 30px 10px'}} flexWrap="nowrap" flexDirection="column" justifyContent="flex-end" alignItems="stretch" container spacing={2}>
                <Grid item>
                    <Grid container display="flex" flexDirection="row" justifyContent='space-between' alignItems="center" flexWrap="nowrap">
                        <Grid item>
                            { isFilmPopular(popularity) ? (
                                <Paper variant="elevation">
                                    <Typography variant="caption" style={{ padding: '0px 4px 0px 4px', color: '#F26419' }}>
                                        TRENDING
                                    </Typography>
                                </Paper>
                                ) : (<></>) }
                        </Grid>
                    </Grid>
                    <Grid container display="flex" flexDirection="row" justifyContent='space-between' alignItems="center" flexWrap="nowrap">
                        <Paper style={{ display: 'flex', justifyContent: 'center',  }}>
                            <Typography variant="caption" style={{ padding: '0px 4px 0px 4px' }}>
                                {original_language?.toUpperCase()}
                            </Typography>
                        </Paper>
                        <Paper style={{ display: 'flex', justifyContent: 'center' }}>
                            {!adult ? (<></>) : 
                            (<Typography variant="caption" color="secondary" style={{ padding: '0px 4px 0px 4px' }}>
                                +18
                            </Typography>)}
                        </Paper>
                    
                        <IconButton size="small">
                            <NavigateNextIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
};