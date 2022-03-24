import { Box, Card, CardActionArea, CardMedia, Grid, styled, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useCart } from "../../utils/Cart-Context";
import LoadingError from "../loadingProduct.tsx/LoadingError";
import LoadingProductDetails from "../loadingProduct.tsx/LoadingProductDetails";
import LoadingRow from "../loadingProduct.tsx/LoadingRow";
import ProductDetailsForm from "./ProductDetailsForm";
import ProductsRow from "./ProductsRow";

const BoxStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        height: "550px",
    },
    [theme.breakpoints.down('sm')]: {
        height: "2050px",
    }
}));


const ProductDetails: React.FC = () => {

    const { addToCart } = useCart()

    const params = useParams();
    const productCategory = params.category;
    const productId = params.product;

    const products = useQuery(["product", productId], async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productCategory}/${productId}`);
        return data;
    })

    const newProductsData = useQuery(['products', 'new'], async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/newproducts`);
        return data;
    })

    const sliceData = (dataArray: any) => {
        return (dataArray.slice(0, 3));
    }
    return (
        <Box sx={{ width: "100%", color: "primary.dark" }}>
            {products.isLoading && <LoadingProductDetails />}
            {products.isError && <LoadingError />}
            {
                products.data && (
                    <Grid container sx={{ width: "100%" }}>
                        <Grid item xs={12} md={5}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={`${process.env.REACT_APP_ASSET_URL}/${products.data?.data.product.image}`}
                                        alt={products.data?.data.product.image}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ margin: " 0 1.5rem" }}>
                            <Box>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant="h3" component="h1" sx={{ marginBottom: "1rem" }}>{products.data?.data.product.productName}</Typography>
                                    <Typography variant="h5" component="h2" sx={{ marginBottom: "1rem" }}>{products.data?.data.product.productCategory}</Typography>
                                </Box>
                                <Typography variant="h4" component="h2" color="secondary.dark" sx={{ marginBottom: "1rem" }}>{products.data?.data.product.price} TND</Typography>
                                <Typography variant="body1" sx={{ marginBottom: "1rem" }}>{products.data?.data.product.description}</Typography>
                            </Box>
                            <Box sx={{ width: "100%" }} >
                                <ProductDetailsForm product={products.data?.data.product}
                                    addToCart={addToCart} />
                            </Box>
                        </Grid>
                    </Grid>
                )
            }
            <Box sx={{ marginTop: "3rem" }}>
                <BoxStyle>
                    <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                        <Typography variant='h4' color="primary">NEW-Products</Typography>
                    </Box>
                    {newProductsData.isLoading && <LoadingRow />}
                    {newProductsData.isError && <LoadingError />}
                    {newProductsData.data && <ProductsRow products={sliceData(newProductsData.data?.data.newProducts)} />}
                </BoxStyle>
            </Box>

        </Box >
    );
}

export default ProductDetails;