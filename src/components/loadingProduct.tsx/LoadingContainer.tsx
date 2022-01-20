import { Container, Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import LoadingProduct from './LoadingProduct';

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

const LoadingContainer: React.FC<Props> = ({ title }) => {
    return (
        <Container sx={{ marginTop: "50px", marginBottom: "50px" }} >
            <BoxStyle>
                <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                    <Typography variant='h4' color="primary">{title}</Typography>
                </Box>
                <Box>
                    <Grid container spacing={7} >
                        <Grid item xs={12} sm={3}>
                            <LoadingProduct />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <LoadingProduct />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <LoadingProduct />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <LoadingProduct />
                        </Grid>
                    </Grid>
                </Box>
            </BoxStyle>
        </Container>
    );
}

export default LoadingContainer;