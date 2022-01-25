import { Box } from "@mui/material";
import React from "react";
import ProductCardMin from "../ProductCard.tsx/ProductsCardMin";

interface Props {
    products: any
}

const ProductsMinContainer: React.FC<Props> = ({ products }) => {
    return (
        <Box>
            {
                products.map((product: any, key: any) => (
                    <ProductCardMin key={key}
                        name={product.productName}
                        description={product.description}
                        price={product.price}
                        category={product.productCategory}
                        image={product.image} />
                ))
            }

        </Box>
    );
}

export default ProductsMinContainer;

