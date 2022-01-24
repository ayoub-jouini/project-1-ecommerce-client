import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import ProductCardMin from '../ProductCard.tsx/ProductsCardMin';

interface Props {
    name: string;
    description: string;
    price: Number;
    category: string;
    image: string;
}

const SideBar: React.FC<Props> = ({ name, description, price, category, image }) => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box sx={{ padding: "2rem", /*borderStyle: "none solid none none ", borderColor: "primary.main", borderWidth: '2px'*/ }}>
            <Box>
                <Typography variant='h6' sx={{ textAlign: 'center', color: 'primary.main' }} >
                    Categories
                </Typography>
            </Box>

            <Button

                sx={{ display: 'block', width: '100%', textAlign: 'center', height: "3rem" }}
                color="primary"
            >
                category1
            </Button>
            <Button
                sx={{ display: 'block', width: '100%', textAlign: 'center', height: "3rem" }}
            >
                category1
            </Button>
            <Button
                sx={{ display: 'block', width: '100%', textAlign: 'center', height: "3rem" }}
            >
                category1
            </Button>
            <Button
                sx={{ display: 'block', width: '100%', textAlign: 'center', height: "3rem" }}
            >
                category1
            </Button>
            <Box>
                <ProductCardMin
                    name={name}
                    description={description}
                    price={price}
                    category={category}
                    image={image} />
            </Box>

        </Box >
    );
}

export default SideBar;