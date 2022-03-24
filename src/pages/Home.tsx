import { Box, Container, styled, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import CarouselComponent from "../components/carousel/Carousel";
import LoadingRow from "../components/loadingProduct.tsx/LoadingRow";
import LoadingError from "../components/loadingProduct.tsx/LoadingError";
import NewsLetter from "../components/newsLetter/NewsLetter";
import ProductsRow from "../components/ProductsContainer/ProductsRow";

const BoxStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        height: "550px",
    },
    [theme.breakpoints.down('sm')]: {
        height: "2050px",
    }
}));

const Home: React.FC = () => {

    const bestProductData = useQuery(['products', 'best'], async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/bestProducts`)
        return data;
    });

    const newProductsData = useQuery(['products', 'new'], async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/newproducts`);
        return data;
    })

    const sliceData = (dataArray: any) => {
        return (dataArray.slice(0, 4));
    }

    return (
        <Box sx={{ marginDown: "100px" }}>
            <CarouselComponent />
            <Container sx={{ marginTop: "50px", marginBottom: "50px" }} >
                <BoxStyle>
                    <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                        <Typography variant='h4' color="primary">BEST-SELLER</Typography>
                    </Box>
                    <Box>
                        {bestProductData.isLoading && <LoadingRow />}
                        {bestProductData.isError && <LoadingError />}
                        {bestProductData.data && <ProductsRow products={sliceData(bestProductData.data?.data.bestProducts)} />}
                    </Box>
                </BoxStyle>
            </Container>
            <Container sx={{ marginTop: "50px", marginBottom: "50px" }} >
                <BoxStyle>
                    <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                        <Typography variant='h4' color="primary">NEW-PRODUCTS</Typography>
                    </Box>
                    {newProductsData.isLoading && <LoadingRow />}
                    {newProductsData.isError && <LoadingError />}
                    {newProductsData.data && <ProductsRow products={sliceData(newProductsData.data?.data.newProducts)} />}
                </BoxStyle>
            </Container>
            <NewsLetter />
        </Box>
    );
}

export default Home;