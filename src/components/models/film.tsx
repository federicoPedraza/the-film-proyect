import { CardMedia, Typography } from "@material-ui/core";
import { Card, CardContent } from '@mui/material'
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../../interfaces/film.interface";
import { CardStyles } from "../../theme/globalStyles";
import { getPoster } from "../../utils/film-helper";

export const Film:FC<{data: IFilm}> = ({data}) => {
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
    backdrop_path,
} = data;
    const [showInfo, setShowInfo] = useState(false);
    const { card, cardContent, cardMediaHover, cardMedia } = CardStyles();
    const [backdrop, setBackdrop ] = useState()
    const navigate = useNavigate()

    const enterDetail = () =>{
        navigate(`details/${id}`)
    }
    const handleMouseEnter = () => {
        setShowInfo(true);
    }

    const handleMouseLeave = () => {
        setShowInfo(false);
    }

    return (
        <Card onClick={enterDetail} className={card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardMedia className={showInfo ? cardMediaHover : cardMedia} component="img" image={getPoster(poster_path)} />
            <CardContent className={cardContent} sx={{ backgroundColor: ' MI COLOR' }}>
                <Typography variant="body1" align="center">
                    {title || name || original_title } 
                </Typography>
            </CardContent>
        </Card>
    )
};