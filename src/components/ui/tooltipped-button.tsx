import { Tooltip } from "@material-ui/core";
import { FC } from "react";
import { ButtonContainer } from "../../interfaces/ui.interface";

export const ButtonWithTooltip:FC<ButtonContainer> = ({icon, tooltipMessage }) => {
    return (
        <Tooltip title={tooltipMessage}>
            {icon}
        </Tooltip> 
    )
}