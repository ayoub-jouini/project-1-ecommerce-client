import { Box } from "@mui/system";
import React from "react";
import { useQueryClient } from "react-query";
import SideBar from "../components/sideBar/SideBar";

const Products: React.FC = () => {

    const queryClient = useQueryClient()
    const data = queryClient.getQueriesData(['products', 'best']);
    console.log(data)

    return (
        <Box>
            <Box sx={{ width: "20%" }}>
                {/* <SideBar /> */}
            </Box>
            <Box>

            </Box>
        </Box>
    );
}

export default Products;