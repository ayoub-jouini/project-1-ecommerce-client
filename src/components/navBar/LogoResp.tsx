import React from "react";
import Typography from '@mui/material/Typography';

const LogoResp: React.FC = () => {
    return (
        <Typography
            color="#ECECEC"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, marginRight: "1rem", display: { xs: 'flex', md: 'none' } }}
        >
            LOGO
        </Typography>
    );
}

export default LogoResp;