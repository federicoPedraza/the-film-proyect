import { Box, Card, CardMedia } from "@material-ui/core";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../../interfaces/film.interface";
import { SimplifiedCardStyles } from "../../theme/globalStyles";
import { getImage } from "../../utils/film-helper";
import { CardFilmDetailsSimplified } from "./card-film-details-simplified";

export const FilmSimplified :FC<{data: IFilm}> = ({data}) => {
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
    const { card, cardContent, cardMedia } = SimplifiedCardStyles();
    const navigate = useNavigate()

    const enterDetail = () =>{
        navigate(`details/${media_type}/${id}`)
    }

    return (
        <Card raised onClick={enterDetail} className={card}>
            <Box className={cardContent}>
                <CardFilmDetailsSimplified data={data} />
            </Box>
            <CardMedia className={cardMedia} style={{ width: '200px', objectFit: 'contain' }} component="img" image={getImage(poster_path)} />
        </Card> 
    )
};