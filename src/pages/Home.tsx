import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import CarouselComponent from "../components/carousel/Carousel";
import LoadingContainer from "../components/loadingProduct.tsx/LoadingContainer";
import LoadingError from "../components/loadingProduct.tsx/LoadingError";
import NewsLetter from "../components/newsLetter/NewsLetter";
import ProductsRow from "../components/ProductsRow.tsx/ProductsRow";

const Home: React.FC = () => {

    const bestProductData = useQuery(['products', 'best'], async () => {
        const data = await axios.get('http://localhost:5000/api/products/bestProducts')
        return data;
    });

    const newProductsData = useQuery(['products', 'new'], async () => {
        const data = await axios.get('http://localhost:5000/api/products/newproducts');
        return data;
    })

    const sliceData = (dataArray: any) => {
        return (dataArray.slice(0, 4));
    }

    return (
        <Box sx={{ marginDown: "100px" }}>
            <CarouselComponent />
            {bestProductData.isLoading && <LoadingContainer title="BEST-SELLER" />}
            {bestProductData.isError && <LoadingError title="BEST-SELLER" />}
            {bestProductData.data && <ProductsRow title="BEST-SELLER" products={sliceData(bestProductData.data?.data.bestProducts)} />}

            {newProductsData.isLoading && <LoadingContainer title="NEW-PRODUCTS" />}
            {newProductsData.isError && <LoadingError title="NEW-PRODUCTS" />}
            {newProductsData.data && <ProductsRow title="NEW-PRODUCTS" products={sliceData(newProductsData.data?.data.newProducts)} />}

            <NewsLetter />
        </Box>
    );
}

export default Home;