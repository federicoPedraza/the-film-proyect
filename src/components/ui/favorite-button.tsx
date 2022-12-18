import { UIStyles } from '../../theme/globalStyles';
import { IconButton } from '@material-ui/core';
import { MouseEventHandler, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface IFavoriteButton {
    active?: boolean;
    filmId?: number;
    onButtonClick?: MouseEventHandler;
}

export const FavoriteButton = (props: IFavoriteButton) => {
    const { active, onButtonClick } = props; 

    return (
        <IconButton size="small" color="primary" onClick={onButtonClick}>
           {active ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    )
};