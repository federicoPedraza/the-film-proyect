import { CardHeader, CardMedia, Grid, IconButton, Typography } from "@material-ui/core";
import { Card, CardContent } from '@mui/material'
import { useRef, useState } from "react";
import { IFilm } from "../../interfaces/film.interface";
import { CardStyles } from "../../theme/globalStyles";
import { getPoster } from "../../utils/poster-helper";
import { FavoriteButton } from "../ui/favorite-button";

export const Film = (props: IFilm) => {
    const { title, poster_path, id } = props;
    const [favorite, setFavorite] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const { card, cardContent, cardMediaHover, cardMedia } = CardStyles();

    const [backdrop, setBackdrop ] = useState()



    const imgRef = useRef()
    const handleMouseEnter = () => {
        setShowInfo(true);
    }

    const handleMouseLeave = () => {
        setShowInfo(false);
    }

    const handleFavoriteClick = () => {
        setFavorite(!favorite);
    }


    return (
        <Card className={card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardMedia className={showInfo ? cardMediaHover : cardMedia} component="img" image={getPoster(poster_path)} />
            <CardContent className={cardContent} sx={{ backgroundColor: ' MI COLOR' }}>
                <Typography variant="body1" align="center">
                    {title}
                </Typography>
                <FavoriteButton active={favorite} onButtonClick={handleFavoriteClick} />

            </CardContent>
        </Card>
    )
};