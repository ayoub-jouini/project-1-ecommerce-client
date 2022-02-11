import { Box, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingContainer from "../loadingProduct.tsx/LoadingContainer";
import LoadingError from "../loadingProduct.tsx/LoadingError";
import ProductCard from "../ProductCard.tsx/ProductCard";

interface Props {

}

const ProductsContainer: React.FC<Props> = ({ }) => {

    const params = useParams();

    const category = params.category || "";
    const products = useQuery(['products', category], async () => {
        const data = await axios.get(`http://localhost:5000/api/products/${category}`);
        return data;
    })

    return (
        <Box  >
            {
                products.isLoading && <LoadingContainer />
            }
            {
                products.isError && <LoadingError />
            }
            <Grid container spacing={7} >
                {products.data?.data.products &&
                    products.data?.data.products.map((product: any, key: any) => (
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
    );
}

export default ProductsContainer;