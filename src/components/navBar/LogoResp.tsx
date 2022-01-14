import React from "react";
import Typography from '@mui/material/Typography';

const LogoResp: React.FC = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
            LOGO
        </Typography>
    );
}

export default LogoResp;