import { FC } from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { SpeedDialMenu } from "../../interfaces/ui.interface";

export const FastMenu:FC<SpeedDialMenu> = ({actions, containerIcon, ariaLabel}) => {
    return (
        <SpeedDial
        ariaLabel={ariaLabel}
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={containerIcon}
        >
        {actions.map(({name,icon}) => (
            <SpeedDialAction
            key={name}
            icon={icon}
            tooltipTitle={name}
            />
        ))}
        </SpeedDial>
    )
}