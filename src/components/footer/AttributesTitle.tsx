import React from "react";
import { Box, Typography } from '@mui/material';

interface Props {
    title: string;
}

const AttributeTitle: React.FC<Props> = ({ title }) => {
    return (
        <Box sx={{ marginBottom: "15px" }}>
            <Typography variant='h6' sx={{ fontWeight: "solid" }} color="secondary">
                {title}
            </Typography>
        </Box>
    );
}

export default AttributeTitle;