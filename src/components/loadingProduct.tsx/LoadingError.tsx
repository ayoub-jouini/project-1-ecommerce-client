import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import { Typography, Box } from "@mui/material";



const LoadingError: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box >
                <ErrorIcon fontSize="large" color="primary" sx={{ height: 80 }} />
            </Box>
            <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                <Typography variant='h5' color="primary">Sorry, Something went wrong</Typography>
            </Box>
        </Box>
    );
}

export default LoadingError;