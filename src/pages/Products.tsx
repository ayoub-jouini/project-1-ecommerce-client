import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import NewsLetter from "../components/newsLetter/NewsLetter";
import SideBar from "../components/sideBar/SideBar";

const Products: React.FC = () => {
    return (
        <Box sx={{ width: "100%" }}>

            <Breadcrumb />
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>

                <Box sx={{ width: "25%", display: { xs: 'none', md: 'flex' } }}>
                    <SideBar />
                </Box>
                <Box sx={{ width: { xs: "100%", md: "72%" }, margin: "1.5rem 0" }} >
                    <Outlet />
                </Box>
            </Container>
            <NewsLetter />
        </Box >
    );
}

export default Products;