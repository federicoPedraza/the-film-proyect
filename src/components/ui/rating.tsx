import { Box, CircularProgress, Typography } from "@material-ui/core";
import { FC } from "react";
import { Rating as MUIRating } from "@mui/material";

export const Rating: FC<{ rating?: number }> = ({ rating }) => {
    if (!rating) {
        return null
    }
    return <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <MUIRating name='user-rating' value={rating} readOnly/>
            <Typography
                variant="caption"
                component="div"
                color="secondary"
            >{rating}</Typography>
    </Box>
}
