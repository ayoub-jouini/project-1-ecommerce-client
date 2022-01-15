import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface Props {
    pages: string[];
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    anchorElNav: HTMLElement | null;
}

const NavMenuResp: React.FC<Props> = ({ pages, handleOpenNavMenu,
    handleCloseNavMenu, anchorElNav }) => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">products</Typography>
                </MenuItem>

                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Link to={page} >
                            <Typography textAlign="center" color="primary">{page}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default NavMenuResp;