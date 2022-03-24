import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingSpiner: React.FC = () => {
    return (
        <Box sx={{ height: "28rem", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress size="10rem" />
        </Box>
    );
}

export default LoadingSpiner;