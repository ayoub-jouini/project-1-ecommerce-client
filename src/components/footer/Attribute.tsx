import React from "react";
import { Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";

interface Props {
    name: string;
}

const Attribute: React.FC<Props> = ({ name }) => {
    return (
        <Box sx={{ marginBottom: "15px" }} >
            <Link to={name} >
                <Typography color="#ECECEC">
                    {name}
                </Typography>
            </Link>
        </Box>
    );
}

export default Attribute;