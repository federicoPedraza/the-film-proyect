import { CardHeader, CardMedia, Grid, IconButton, Typography } from "@material-ui/core";
import { Card, CardContent } from '@mui/material'
import { useState } from "react";
import { IFilm } from "../../interfaces/film.interface";
import { CardStyles } from "../../theme/globalStyles";
import { getDominantColor, getPoster } from "../../utils/poster-helper";
import { FavoriteButton } from "../ui/favorite-button";
import { Color } from 'color-thief-react';

export const Film = (props: IFilm) => {
    const { title, poster_path, id } = props; 
    const [favorite, setFavorite] = useState(false);
    const [ showInfo, setShowInfo ] = useState(false);
    const { card, cardContent, cardMediaHover, cardMedia } = CardStyles();

    const handleMouseEnter = () => {
        setShowInfo(true);
    }

    const handleMouseLeave = () => {
        setShowInfo(false);
    }

    const handleFavoriteClick = () => {
        setFavorite(!favorite);
    }

    console.log(getDominantColor(getPoster(poster_path)))
    
    return (
        <Card className={card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardMedia className={showInfo ? cardMediaHover : cardMedia} component="img" image={getPoster(poster_path)} />
                    <Color format="hex" src={getPoster(poster_path)} crossOrigin="anonymous">
                        {(color) => {
                            console.log(color);
                            const hexColor = color.data;
                            return (
                                <CardContent className={cardContent} sx={{ backgroundColor: hexColor}}>
                                    <Typography variant="body1" align="center">
                                        {title}
                                    </Typography>
                                    <FavoriteButton active={favorite} onButtonClick={handleFavoriteClick} />
                                </CardContent>
                            )
                        }}
                    </Color>
        </Card>
    )
};