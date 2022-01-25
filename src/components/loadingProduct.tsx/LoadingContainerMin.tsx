import { Box } from "@mui/material";
import React from "react";
import LoadingProductMin from "./LoadingProductMin";

const LoadingContainerMin: React.FC = () => {
    return (
        <Box>
            <LoadingProductMin />
            <LoadingProductMin />
            <LoadingProductMin />
        </Box>
    );
}

export default LoadingContainerMin;