import { Button, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CallToAction as Interface } from "../../interfaces/ui.interface";
import { GlobalStyles } from "../../theme/globalStyles";
import { motion } from "framer-motion";
import { boilerplateMotion, delayedAnimation, offsetApparition } from "../../services/shared/motion.service";

const CardMotion = motion(Card)


export const CallToAction: FC<Interface> = ({ title, subtitle, redirect, redirectMessage, onClickFn, onClickMessage }) => {
    const { error404Container, error404Card } = GlobalStyles()
    const navigate = useNavigate()
    return (
        <CardMotion {...boilerplateMotion}
            transition={delayedAnimation({ delay: .5, duration: .75 })}
            variants={offsetApparition({ offsetY: "-5%" }, 0, { duration: 1 })} 
            className={error404Container} elevation={24}>
            <CardActionArea style={{ height: "100%", width: "100%" }}>
                <CardContent className={error404Card}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {title}
                    </Typography>
                    <Typography variant="h6" component="h3" align="center">
                        {subtitle}
                    </Typography>
                    {redirect &&
                    <Button onClick={() => navigate(redirect)} color="secondary" variant="contained">
                        {redirectMessage}
                    </Button>}
                    {Boolean(onClickMessage) && onClickFn &&
                    <Button onClick={() => onClickFn()} color="secondary" variant="contained">
                        LOGOUT
                    </Button>
                    }
                </CardContent>
            </CardActionArea>
        </CardMotion>
    )
}