import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailsForm from "./ProductDetailsForm";


const ProductDetails: React.FC = () => {

    const params = useParams();
    const productCategory = params.category;
    const productId = params.product;

    const products = useQuery(["product", productId], async () => {
        const data = await axios.get(`http://localhost:5000/api/products/${productCategory}/${productId}`);
        return data;
    })



    return (
        <Box sx={{ width: "100%", color: "primary.dark" }}>
            {
                products.data && (
                    <Box sx={{ width: "100%", display: "flex" }}>
                        <Box sx={{ width: "40%" }}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={`http://localhost:5000/${products.data?.data.product.image}`}
                                        alt={products.data?.data.product.image}
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                        <Box sx={{ width: "50%", margin: " 0 1.5rem" }}>
                            <Box>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant="h3" component="h1" sx={{ marginBottom: "1rem" }}>{products.data?.data.product.productName}</Typography>
                                    <Typography variant="h5" component="h2" sx={{ marginBottom: "1rem" }}>{products.data?.data.product.productCategory}</Typography>
                                </Box>
                                <Typography variant="h4" component="h2" color="secondary.dark" sx={{ marginBottom: "1rem" }}>{products.data?.data.product.price} TND</Typography>
                                <Typography variant="body1" sx={{ marginBottom: "1rem" }}>{products.data?.data.product.description}</Typography>
                            </Box>
                            <Box sx={{ width: "100%" }} >
                                <ProductDetailsForm productSize={products.data?.data.product.size} />

                            </Box>
                        </Box>
                    </Box>
                )
            }


        </Box >
    );
}

export default ProductDetails;