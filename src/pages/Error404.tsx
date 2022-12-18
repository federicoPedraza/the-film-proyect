import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { CardActionArea } from "@mui/material";
import { FC } from "react";
import { GlobalStyles } from "../theme/globalStyles";

export const Error404 : FC = () => {
    return (
        <Card className={GlobalStyles().error404Container} elevation={24}>
            <CardActionArea href="/" sx={{ height: "100%", width: "100%"}}>
                <CardContent className={GlobalStyles().error404Card}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        ERROR 404
                    </Typography>
                    <Typography variant="h6" component="h3" align="center">
                        Uh oh, looks like you've been lost in cyberspace
                    </Typography>

                    <Button href="/" color="secondary" variant="contained">
                        Click here to go home
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}