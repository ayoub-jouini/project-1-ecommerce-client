import { Box, Container, Typography } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import React from "react";

const NotFound: React.FC = () => {
    return (
        <Box sx={{ height: "460px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box >
                    <ErrorIcon color="primary" sx={{ height: 80, fontSize: "50px" }} />
                </Box>
                <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                    <Typography variant='h5' color="primary">Sorry, could not find this page</Typography>
                </Box>
            </Container>
        </Box >
    );
}

export default NotFound;