import React from "react";
import Typography from '@mui/material/Typography';

const Logo: React.FC = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
            LOGO
        </Typography>
    );
}

export default Logo;