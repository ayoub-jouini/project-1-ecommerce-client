import { Skeleton, Box } from "@mui/material";
import React from "react";

const LoadingProduct: React.FC = () => {
    return (
        <Box>
            <Skeleton variant="rectangular" sx={{ maxWidth: 345, height: 250 }} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
        </Box>
    );
}

export default LoadingProduct;