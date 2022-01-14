import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import ShoppingCart from "./ShoppingCartIcon";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import NavMenuResp from "./NavMenuResp";
import Logo from "./Logo";
import LogoResp from "./LogoResp";

const pages: string[] = ['Promotions', 'News', 'Blog', 'About Us', 'Contact'];
const categories: string[] = ['mrewel', 'srewel', 'trabech'];



const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ margin: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo />
                    <NavMenuResp pages={pages}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                        anchorElNav={anchorElNav}
                    />
                    <LogoResp />
                    <NavMenu pages={pages}
                        categories={categories}
                        anchorElUser={anchorElUser}
                        handleOpenUserMenu={handleOpenUserMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                        handleCloseUserMenu={handleCloseUserMenu} />
                    <SearchBar />
                    <ShoppingCart />

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;