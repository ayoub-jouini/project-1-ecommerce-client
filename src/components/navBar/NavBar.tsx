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
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const pages: string[] = ['Promotions', 'News', 'Blog', 'About', 'Contact'];

interface Props {
    toggleDrawer: (toggle: boolean) => any;
}

const NavBar: React.FC<Props> = ({ toggleDrawer }) => {

    const categories = useQuery("categories", async () => {
        const data = await axios.get('http://localhost:5000/api/category/')
        return data;
    })

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
        <header>
            <AppBar position="static" sx={{ margin: 0 }}>
                <Container >
                    <Toolbar disableGutters>
                        <Link to="/">
                            <Logo />
                        </Link>
                        {
                            categories.data &&
                            <NavMenuResp pages={pages}
                                categories={categories.data?.data.categories}
                                handleOpenNavMenu={handleOpenNavMenu}
                                handleCloseNavMenu={handleCloseNavMenu}
                                anchorElNav={anchorElNav}
                            />
                        }
                        <Link to="/">
                            <LogoResp />
                        </Link>
                        {
                            categories.data &&
                            <NavMenu pages={pages}
                                categories={categories.data?.data.categories}
                                anchorElUser={anchorElUser}
                                handleOpenUserMenu={handleOpenUserMenu}
                                handleCloseNavMenu={handleCloseNavMenu}
                                handleCloseUserMenu={handleCloseUserMenu} />
                        }

                        <SearchBar />
                        <Box onClick={toggleDrawer(true)}>
                            <ShoppingCart />
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
};
export default NavBar;