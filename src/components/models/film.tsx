import { Box, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../../interfaces/film.interface";
import { CardStyles, tfpTheme } from "../../theme/globalStyles";
import { getImage, isFilmPopular, POPULAR_THRESHOLD } from "../../utils/film-helper";
import { CardFilmDetails } from "./card-film-details";
import WhatshotIcon from '@mui/icons-material/Whatshot';

export const Film : FC<{data: IFilm}> = ({data}) => {
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
    const navigate = useNavigate()
    const enterDetail = () =>{
        navigate(`details/${media_type}/${id}`)
    }
    
    const handleMouseEnter = () => {
        setShowInfo(true);
    }
    const handleMouseLeave = () => {
        setShowInfo(false);
    }

    return (
        <Card onClick={enterDetail} className={card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardMedia className={showInfo ? cardMediaHover : cardMedia} component="img" image={getImage(poster_path)} />
            <Box className={cardContent}>
                <CardFilmDetails data={data} />
            </Box>
            { isFilmPopular(popularity) ? (
                <WhatshotIcon htmlColor="#F26419" style={{ position: 'absolute', bottom: '0', right: '0', visibility: showInfo ? 'hidden' : 'visible' }} />
            ) : (<></>) }
        </Card> 
    )
};