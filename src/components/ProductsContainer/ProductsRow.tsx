import { Container, Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import ProductCard from '../ProductCard.tsx/ProductCard';

const BoxStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        height: "550px",
    },
    [theme.breakpoints.down('sm')]: {
        height: "2050px",
    }
}));

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
    title: string;
    products: Product[];
}

const ProductsRow: React.FC<Props> = ({ title, products }) => {
    return (
        <Container sx={{ marginTop: "50px", marginBottom: "50px" }} >
            <BoxStyle >
                <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }} >
                    <Typography variant='h4' color="primary">{title}</Typography>
                </Box>
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
            </BoxStyle>
        </Container>
    );
}


export default ProductsRow;
