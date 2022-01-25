import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import ProductCardMin from '../ProductCard.tsx/ProductsCardMin';

const SideBar: React.FC = () => {

    const bestProductData = useQuery(['products', 'best'], async () => {
        const data = await axios.get('http://localhost:5000/api/products/bestProducts')
        return data;
    });

    const sliceData = (dataArray: any) => {
        return (dataArray.slice(0, 3));
    }

    return (
        <Box sx={{ padding: "2rem", width: "100%" }}>
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
                {bestProductData.data &&
                    sliceData(bestProductData.data?.data.bestProducts).map((product: any, key: any) => (
                        <ProductCardMin key={key}
                            name={product.productName}
                            description={product.description}
                            price={product.price}
                            category={product.productCategory}
                            image={product.image} />
                    ))
                }

            </Box>

        </Box >
    );
}

export default SideBar;