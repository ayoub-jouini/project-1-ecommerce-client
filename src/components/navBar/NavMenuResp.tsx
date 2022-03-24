import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    pages: string[];
    categories: any;
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    anchorElNav: HTMLElement | null;
}

const NavMenuResp: React.FC<Props> = ({ pages, categories, handleOpenNavMenu,
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

                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography textAlign="center">products</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            categories.map((category: any, key: any) => (
                                <Link to={`products/${category.categoryName}`} key={key}>
                                    <MenuItem onClick={handleCloseNavMenu} >
                                        {category.categoryName}
                                    </MenuItem >
                                </Link>
                            ))
                        }

                    </AccordionDetails>
                </Accordion>

                {pages.map((page) => (
                    <Link to={page} key={page} >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" color="primary">{page}</Typography>
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </Box>
    );
}

export default NavMenuResp;