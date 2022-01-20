import { Box } from "@mui/system";
import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import { Container, styled, Typography } from "@mui/material";

const BoxStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        height: "550px",
    },
    [theme.breakpoints.down('sm')]: {
        height: "2050px",
    }
}));

interface Props {
    title: string;
}

const LoadingError: React.FC<Props> = ({ title }) => {
    return (
        <Container sx={{ marginTop: "50px", marginBottom: "50px" }} >
            <BoxStyle>
                <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                    <Typography variant='h4' color="primary">{title}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box >
                        <ErrorIcon fontSize="large" color="primary" sx={{ height: 80 }} />
                    </Box>
                    <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                        <Typography variant='h5' color="primary">Sorry, Something went wrong</Typography>
                    </Box>
                </Box>
            </BoxStyle>
        </Container>
    );
}

export default LoadingError;