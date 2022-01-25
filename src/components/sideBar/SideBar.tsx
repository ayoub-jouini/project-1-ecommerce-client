import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import LoadingContainerMin from '../loadingProduct.tsx/LoadingContainerMin';
import ProductsMinContainer from '../ProductsContainer/ProductsMinContainer';

const SideBar: React.FC = () => {

    const categories: string[] = ["category1", "category2", "category3", "category4"]

    const bestProductData = useQuery(['products', 'best'], async () => {
        const data = await axios.get('http://localhost:5000/api/products/bestProducts')
        return data;
    });

    const sliceData = (dataArray: any) => {
        return (dataArray.slice(0, 3));
    }

    return (
        <Box sx={{ width: "100%", margin: "1rem 0" }}>
            <Box>
                <Typography variant='h6' sx={{ textAlign: 'left', color: 'primary.main' }} >
                    Categories
                </Typography>
            </Box>

            {
                categories.map((category, key) => (
                    <Link to={`/products/${category}`} key={key} >
                        <Button sx={{ display: 'block', width: '100%', textAlign: 'left', height: "3rem" }} color="primary">
                            {category}
                        </Button>
                    </Link>
                ))
            }

            <Box>
                {bestProductData.isLoading && <LoadingContainerMin />}
                {bestProductData.data && <ProductsMinContainer products={sliceData(bestProductData.data?.data.bestProducts)} />}
            </Box>

        </Box >
    );
}

export default SideBar;