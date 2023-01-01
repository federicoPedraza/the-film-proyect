import React, { FC } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UIStyles } from '../../../theme/globalStyles';
import { NavbarButtonIcon, NavbarButtonType } from './navbar-button.types';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export const NavbarButton : FC<NavbarButtonType> = (props: NavbarButtonType) => {
    const { content, icon, url, variant } = props;
    const navigate = useNavigate();
    const { pageHeaderButtonOutlined, pageHeaderButtonRounded } = UIStyles();

    const getIcon = () => {
        switch (icon) {
            case NavbarButtonIcon.HOME:
                return (<HomeIcon />)
            
            case NavbarButtonIcon.SETTINGS:
                return (<SettingsIcon />)

            default:
                <></>
                break;
        }
    }

    switch (variant) {
        
        case 'rounded':
            return (
                <IconButton className={pageHeaderButtonRounded} onClick={() => navigate(url)}>
                    {getIcon()}
                </IconButton>
            )
        break;

        default: 
            return (
                <Button className={pageHeaderButtonOutlined} variant="text" onClick={() => navigate(url)}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {getIcon()}
                        <Typography noWrap variant="h5">
                            {content}
                        </Typography>
                    </Box>
                </Button>
            )
    }

}