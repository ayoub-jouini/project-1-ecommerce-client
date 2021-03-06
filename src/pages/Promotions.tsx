import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import LoadingContainer from "../components/loadingProduct.tsx/LoadingContainer";
import LoadingError from "../components/loadingProduct.tsx/LoadingError";
import NewsLetter from "../components/newsLetter/NewsLetter";
import ProductCard from "../components/ProductCard.tsx/ProductCard";
import SideBar from "../components/sideBar/SideBar";

const Promotions: React.FC = () => {

    const products = useQuery(['products', "best"], async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/bestProducts`);
        return data;
    })

    return (
        <Box sx={{ width: "100%" }}>

            <Breadcrumb pageName="Best Products" />
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>

                <Box sx={{ width: "25%", display: { xs: 'none', md: 'flex' } }}>
                    <SideBar />
                </Box>
                <Box sx={{ width: { xs: "100%", md: "72%" }, margin: "1.5rem 0" }} >
                    <Box  >
                        {
                            products.isLoading && <LoadingContainer />
                        }
                        {
                            products.isError && <LoadingError />
                        }
                        <Grid container spacing={7} >
                            {products.data?.data.bestProducts &&
                                products.data?.data.bestProducts.map((product: any, key: any) => (
                                    <Grid item xs={12} sm={4} key={key}>
                                        <ProductCard
                                            id={product.id}
                                            name={product.productName}
                                            description={product.description}
                                            category={product.productCategory}
                                            price={product.price}
                                            image={product.image}
                                        />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <NewsLetter />
        </Box >
    );
}

export default Promotions;