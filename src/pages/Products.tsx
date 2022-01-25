import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SideBar from "../components/sideBar/SideBar";

const Products: React.FC = () => {

    return (
        <Box sx={{ width: "100%" }}>

            <Breadcrumb />
            <Container>

                <Box sx={{ width: "25%", display: { xs: 'none', md: 'flex' } }}>
                    <SideBar />
                </Box>
                <Box>

                </Box>
            </Container>
        </Box >
    );
}

export default Products;