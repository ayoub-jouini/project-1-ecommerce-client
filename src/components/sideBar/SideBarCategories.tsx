import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    categories: any
}

const SideBarCategories: React.FC<Props> = ({ categories }) => {
    return (
        <Box>
            {
                categories.map((category: any, key: any) => (
                    <Link to={`/products/${category.categoryName}`} key={key} >
                        <Button sx={{ display: 'block', width: '100%', textAlign: 'left', height: "3rem" }} color="primary">
                            {category.categoryName}
                        </Button>
                    </Link>
                ))
            }
        </Box>
    );
}

export default SideBarCategories;