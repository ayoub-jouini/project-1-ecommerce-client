import React from 'react';
import { Box, Skeleton } from "@mui/material"

const LoadingProductDetails: React.FC = () => {
    return (
        <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "40%", height: "400px" }}>
                <Skeleton variant='rectangular' sx={{ height: "100%" }} />
            </Box>
            <Box sx={{ width: "50%", margin: " 0 1.5rem" }}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </Box>
        </Box>
    )
}

export default LoadingProductDetails;