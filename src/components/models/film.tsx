import { CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { Card } from '@mui/material'
import { useState } from "react";
import { IFilm } from "../../interfaces/film.interface";
import { CardStyles } from "../../theme/globalStyles";

export const Film = (props: IFilm) => {
    const { title, poster_path } = props; 
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const [ showInfo, setShowInfo ] = useState(false);

    const handleMouseEnter = () => {
        setShowInfo(true);
    }

    const handleMouseLeave = () => {
        setShowInfo(false);
    }

    return (
        <Card className={CardStyles().card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardMedia style={{objectFit: "contain"}} component="img" image={imageBaseUrl+poster_path} />
            {showInfo && (
              <CardContent>
                    <Typography gutterBottom component="div" variant="h6" align="center">
                        {title}
                    </Typography>
              </CardContent>
            )}
        </Card>
    )
};