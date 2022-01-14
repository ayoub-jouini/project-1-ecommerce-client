import React from "react";
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const ShoppingCart: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                    <ShoppingCartIcon sx={{ fontSize: { xs: 30, md: 40 } }} color="secondary" />
                </IconButton>
            </Tooltip>

        </Box>
    );
}

export default ShoppingCart;