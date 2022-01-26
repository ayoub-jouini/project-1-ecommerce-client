import { Box, Grid } from '@mui/material';
import React from 'react'
import LoadingProduct from './LoadingProduct';

const LoadingRow: React.FC = () => {
    return (
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

    );
}

export default LoadingRow;