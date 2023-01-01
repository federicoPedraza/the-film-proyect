import { Box, CircularProgress, Typography } from "@mui/material";
import { FC } from "react";
import { HeroStyle } from "../../theme/globalStyles";

export const ProgressWithText: FC<{ value: number }> = ({ value }) => {
    const { progress } = HeroStyle()
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', color: '#000' }}>
            <CircularProgress className={progress} variant="determinate" value={value} />
                <Typography
                    variant="caption"
                    component="div"
                ></Typography>
        </Box>
    )
}