import { Card, CardContent, Typography } from "@material-ui/core";
import { IFilm } from "../../interfaces/film.interface";

export const Film = (props: IFilm) => {
    const { title, id } = props; 

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
            </CardContent>
        </Card>
    )
};