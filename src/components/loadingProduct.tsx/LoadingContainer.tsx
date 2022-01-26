import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoadingProduct from "./LoadingProduct";

const LoadingContainer: React.FC = () => {
    return (
        <Box>
            <Grid container spacing={7} >
                <Grid item xs={12} sm={4}>
                    <LoadingProduct />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <LoadingProduct />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <LoadingProduct />
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoadingContainer;