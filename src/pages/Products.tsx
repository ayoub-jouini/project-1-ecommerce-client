import { Box } from "@mui/system";
import React from "react";
import SideBar from "../components/sideBar/SideBar";

const Products: React.FC = () => {

    return (
        <Box>
            <Box sx={{ width: "25%", display: { xs: 'none', md: 'flex' } }}>
                <SideBar />
            </Box>
            <Box>

            </Box>
        </Box >
    );
}

export default Products;