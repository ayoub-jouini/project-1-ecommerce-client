import { Box, Skeleton } from "@mui/material";
import React from "react";

const LoadingCategories: React.FC = () => {
    return (
        <Box>
            <Skeleton variant="text" sx={{ display: 'block', width: '100%', height: "3rem" }} />
            <Skeleton variant="text" sx={{ display: 'block', width: '100%', height: "3rem" }} />
            <Skeleton variant="text" sx={{ display: 'block', width: '100%', height: "3rem" }} />
            <Skeleton variant="text" sx={{ display: 'block', width: '100%', height: "3rem" }} />
        </Box>
    );
}

export default LoadingCategories;