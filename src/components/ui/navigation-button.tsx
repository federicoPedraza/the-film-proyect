import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { UIStyles } from '../../theme/globalStyles';
import { Box, IconButton } from '@material-ui/core';
import { MouseEventHandler } from 'react';

export enum NavigationDirection {
    LEFT = "left",
    RIGHT = "right"
}

export interface INavigationButton {
    direction?: NavigationDirection;
    onButtonClick?: MouseEventHandler;
}

export const NavigationButton = (props: INavigationButton) => {
    const { direction, onButtonClick } = props; 

    let icon;
    switch (direction) {
        case NavigationDirection.RIGHT:
          icon = <NavigateNextRoundedIcon />;
          break;
        case NavigationDirection.LEFT:
          icon = <NavigateBeforeRoundedIcon />;
          break;
        default:
          icon = null;
      }

    return (
        <div className={UIStyles().navigationButtonContainer}> 
            <IconButton size="medium" color="primary" className={UIStyles().navigationButton} onClick={onButtonClick}>
                {icon}
            </IconButton>
        </div>
    )
};