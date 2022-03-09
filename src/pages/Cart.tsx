import { Box, Container } from '@mui/material';
import React from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import CartProducts from '../components/cartProducts/CartProducts';
import NewsLetter from '../components/newsLetter/NewsLetter';
import SideBar from '../components/sideBar/SideBar';

const Cart: React.FC = () => {
    return (
        <Box sx={{ width: "100%" }}>

            <Breadcrumb pageName='Cart' />
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>

                <Box sx={{ width: "25%", display: { xs: 'none', md: 'flex' } }}>
                    <SideBar />
                </Box>
                <Box sx={{ width: { xs: "100%", md: "72%" }, margin: "1.5rem 0" }} >
                    <CartProducts />
                </Box>
            </Container>
            <NewsLetter />
        </Box >
    );
}

export default Cart;