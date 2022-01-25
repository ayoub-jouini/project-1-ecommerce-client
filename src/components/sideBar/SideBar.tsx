import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import LoadingCategories from '../loadingProduct.tsx/LoadingCategories';
import LoadingContainerMin from '../loadingProduct.tsx/LoadingContainerMin';
import ProductsMinContainer from '../ProductsContainer/ProductsMinContainer';
import SideBarCategories from './SideBarCategories';

const SideBar: React.FC = () => {

    const bestProductData = useQuery(['products', 'best'], async () => {
        const data = await axios.get('http://localhost:5000/api/products/bestProducts')
        return data;
    });

    const categories = useQuery("categories", async () => {
        const data = await axios.get('http://localhost:5000/api/category/')
        return data;
    })
    console.log(categories)

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

            {categories.isLoading && <LoadingCategories />}
            {categories.data && <SideBarCategories categories={categories.data?.data.categories} />}

            <Box>
                {bestProductData.isLoading && <LoadingContainerMin />}
                {bestProductData.data && <ProductsMinContainer products={sliceData(bestProductData.data?.data.bestProducts)} />}
            </Box>

        </Box >
    );
}

export default SideBar;