import { Box, Button, ClickAwayListener, Popover } from "@material-ui/core";
import { FC, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UIStyles } from "../../theme/globalStyles";

export const SmallMenu: FC<{menuText: string}> = ({menuText}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState(false);
    const { button } = UIStyles()

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };
    // const navigateToAuthorize = () => {
    //     navigate("/authorize");
    // };
    return (
        <>
            <Button className={button} onClick={handleClick}>
                {menuText}
            </Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <ClickAwayListener onClickAway={handleClose}>
                    <Box p={1}>
                        <Button onClick={handleClose} href="/authorize">
                            Vincular cuenta
                        </Button>
                        <Button onClick={handleClose} href="/help">
                            Ayuda
                        </Button>
                    </Box>
                </ClickAwayListener>
            </Popover>

        </>
    );
}