import { Box } from "@mui/material";
import { FC } from "react";
import { Rating as MUIRating } from "@mui/material";

export const Rating: FC<{ rating?: number }> = ({ rating }) => {
    if (!rating) {
        return null
    }
    return <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <MUIRating name='user-rating' value={rating} max={10} readOnly/>
    </Box>
}
