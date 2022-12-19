import { Box, IconButton, Paper, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { FC } from "react";
import { IFilm } from "../../interfaces/film.interface";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
        <Box style={{ width: '100%', height: '100%'}}>
            <Grid style={{ width: '100%', height: '100%', padding: '15px'}} flexDirection="column" justifyContent="space-between" alignItems="stretch" container spacing={2}>
                <Grid item>
                    <Typography variant="caption" component="p">{title || name}</Typography>
                </Grid>
                <Grid item>
                    <Grid container display="flex" flexDirection="row" justifyContent='space-between' alignItems="flex-end" flexWrap="nowrap">
                        <Paper style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="caption" style={{ padding: '0px 4px 0px 4px' }}>
                                {original_language?.toUpperCase()}
                            </Typography>
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