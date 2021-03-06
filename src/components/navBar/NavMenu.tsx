import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import ProductsMenu from './ProductsMenu';
import { Link } from "react-router-dom";

interface Props {
    pages: String[];
    categories: string[];
    anchorElUser: HTMLElement | null;
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavMenu: React.FC<Props> = ({ pages, handleOpenUserMenu, handleCloseNavMenu,
    categories, handleCloseUserMenu, anchorElUser }) => {
    return (
        <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
            <Button
                variant="contained"
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: '#ECECEC', display: 'block', boxShadow: 0 }}
            >
                products
            </Button>
            <ProductsMenu categories={categories}
                anchorElUser={anchorElUser}
                handleCloseNavMenu={handleCloseNavMenu}
                handleCloseUserMenu={handleCloseUserMenu}
            />
            {pages.map<JSX.Element>((page, key) => (
                <Link to={`${page}`} key={key}>
                    <Button
                        variant="contained"
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: '#ECECEC', display: 'block', boxShadow: 0 }}
                    >
                        {page}
                    </Button>
                </Link>
            ))}
        </Box>
    );
}

export default NavMenu;