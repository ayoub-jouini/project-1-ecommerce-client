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

    let sm: number;
    if (products.length === 3) {
        sm = 4;
    } else {
        sm = 3;
    }

    return (
        <Box>
            <Grid container spacing={7} >
                {
                    products.map((product: any, key: any) => (
                        <Grid item xs={12} sm={sm} key={key}>
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


export default ProductsRow;
