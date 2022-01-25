import { Box, Skeleton } from "@mui/material";
import React from "react";

const LoadingProductMin: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', height: "6rem", marginTop: "1rem" }}>
            <Box sx={{ width: "40%" }}>
                <Skeleton variant="rectangular" width="100%" height="100%" />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "space-around",
                width: "60%",
                alignItems: "center"
            }}>
                <Skeleton variant="text" sx={{ width: "80%" }} />
                <Skeleton variant="text" sx={{ width: "80%" }} />
                <Skeleton variant="text" sx={{ width: "80%" }} />
            </Box>

        </Box>
    );
}

export default LoadingProductMin;