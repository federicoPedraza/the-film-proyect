import { Box, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../../interfaces/film.interface";
import { CardStyles, tfpTheme } from "../../theme/globalStyles";
import { getImage } from "../../utils/film-helper";
import { CardFilmDetails } from "./card-film-details";

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
    const navigate = useNavigate()
    const header = title || name || original_title
    const enterDetail = () =>{
        const alt_media_type = title ? 'movie' : 'tv'
        navigate(`details/${media_type || alt_media_type}/${id}`)
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
        </Card>
    )
};