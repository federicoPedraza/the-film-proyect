import { Box, CircularProgress, Typography } from "@material-ui/core";
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
                >IMdb popularity: {`${Math.round(value)}%`}</Typography>
        </Box>
    )
}