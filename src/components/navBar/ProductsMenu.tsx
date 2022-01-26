import React from "react";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

interface Props {
    categories: any;
    anchorElUser: HTMLElement | null;
    handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

const ProductsMenu: React.FC<Props> = ({ categories, anchorElUser, handleCloseNavMenu, handleCloseUserMenu }) => {
    return (
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            {categories.map((category: any, key: any) => (
                <Link to={`/products/${category.categoryName}`} key={key}>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{category.categoryName}</Typography>
                    </MenuItem>
                </Link>
            ))}
        </Menu>
    );
}

export default ProductsMenu;