import { Box, Button, ClickAwayListener, IconButton, Popover } from "@mui/material";
import { FC, MouseEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UIStyles } from "../../theme/globalStyles";

export const AvatarMenu: FC<{avatar: ReactNode, options:Record<string,string>[]}> = ({avatar, options}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState(false);
    const { button } = UIStyles()
    const navigate = useNavigate()
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleNavigation = (target: string) => {
        navigate(target)
        handleClose()
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
            <IconButton  onClick={handleClick}  color="inherit" aria-label="Avatar icon">
              {avatar}
            </IconButton>
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
                    <Box p={3}>
                        {options.map(({title,target},index)=>{ return (
                        <Button  
                        key={`${target}-index-${index}`}
                        onClick={()=>handleNavigation(target)}
                        >
                            {title}
                        </Button>) })}
                    </Box>
                </ClickAwayListener>
            </Popover>

        </>
    );
}