import { Grid, Box } from '@mui/material';
import React from 'react'
import ProductCard from '../ProductCard.tsx/ProductCard';

interface Product {
    productName: string;
    productCategory: string;
    image: string;
    description: string;
    price: Number;
    onStock: boolean;
    size: string[];
    bestDesplay: Boolean;
}

interface Props {
    products: Product[];
}

const ProductsRow: React.FC<Props> = ({ products }) => {
    return (
        <Box>
            <Grid container spacing={7} >
                {
                    products.map((product, key) => (
                        <Grid item xs={12} sm={3} key={key}>
                            <ProductCard
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


export default ProductsRow;
