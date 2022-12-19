import { Box, Container, IconButton, Paper, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { FC } from "react";
import { IFilm } from "../../interfaces/film.interface";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { isFilmPopular } from "../../utils/film-helper";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export const CardFilmDetailsSimplified : FC<{data: IFilm}> = ({data}) => {
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
        <Box style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Container style={{ position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%, -50%)'}}>
                <Box>
                    <IconButton style={{ scale: '3', opacity: '0.2  '}} size="medium">
                        <PlayCircleIcon fontSize="large"/>
                    </IconButton>
                </Box>
            </Container>
            <Container style={{ padding: '10px', width: '100%' }}>
                        <Typography variant="button" align="center" component="p">{title || name}</Typography>
            </Container>
            <Grid style={{ width: '100%', height: '100%', padding: '0px 10px 10px 10px'}} flexWrap="nowrap" flexDirection="column" justifyContent="flex-end" alignItems="stretch" container spacing={2}>
                <Grid item>
                    <Grid container style={{ marginBottom: '10px'}} display="flex" flexDirection="row" justifyContent='space-between' alignItems="center" flexWrap="nowrap">
                        <Grid item>
                            { isFilmPopular(popularity) ? (
                                <Paper elevation={5} variant="elevation">
                                    <Typography variant="caption" style={{ padding: '0px 60px 0px 60px', color: '#F26419' }}>
                                        TRENDING
                                    </Typography>
                                </Paper>
                                ) : (<></>) }
                        </Grid>
                    </Grid>
                    <Grid container display="flex" flexDirection="row" justifyContent='space-between' alignItems="center" flexWrap="nowrap">
                        <Paper style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="caption" style={{ padding: '0px 30px 0px 30px' }}>
                                {original_language?.toUpperCase()}
                            </Typography>
                        </Paper>
                        <Paper style={{ display: 'flex', justifyContent: 'center' }}>
                            {!adult ? (<></>) : 
                            (<Typography variant="caption" color="secondary" style={{ padding: '0px 10px 0px 10px' }}>
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