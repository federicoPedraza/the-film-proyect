import { Card, Container, Paper, Typography } from "@material-ui/core";
import { FC } from "react";
import { IFilmViewer } from "../../interfaces/film-viewer.interface";
import { Film } from "../models/film";


export const FilmViewer: FC<IFilmViewer> = (props: IFilmViewer) => {
    const { films, label } = props;

    return (
        <Card>
            <Typography variant="h2">{label}</Typography>
            {films?.map((film, index) => {
                return <Film key={index} title={film.title}></Film>
            })}
        </Card>
    );
}   