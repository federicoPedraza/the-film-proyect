import { AppBar, Avatar, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from "@material-ui/core";
import { UIStyles } from "../../theme/globalStyles";
import { FC } from "react";
import { SmallMenu } from "./menu";

export const Navbar: FC<{}> = () => {
    const { appBar, pageHeader, appBarButtons, button } = UIStyles();

    return (
        <AppBar position="static" elevation={4} color="primary">
            <Toolbar className={appBar}>
                <Typography className={pageHeader} noWrap variant="h4">
                    The <i>Film</i> Project
                </Typography>
                <ButtonGroup size="large" variant="text" className={appBarButtons}>
                    <Button className={button} href="/">Home</Button>
                    <Button className={button} href="/">Movies</Button>
                    <Button className={button} href="/">TV</Button>
                </ButtonGroup>
                <div>
                    <SmallMenu menuText='Login' />
                    <IconButton href="/onboarding/login" color="inherit" aria-label="Login icon">
                        {false ? 
                        <Avatar alt="Guest">G</Avatar> :
                        <Avatar alt="Profile">N</Avatar>
                        }
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}