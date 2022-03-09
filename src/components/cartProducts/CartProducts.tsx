import { Box } from '@mui/material';
import React, { useContext, useState } from 'react'
import CartContext from '../../utils/Cart-context';
import CartCard from './CartCard';

const CartProducts: React.FC = () => {

    const products = useContext(CartContext);
    return (
        <Box>
            {/* {products.products.map((product: any, key: any) => (
                <CartCard
                    key={key}
                    productImage={product.image}
                    productName={product.name}
                    productCategory={product.category}
                    productDescription={product.description}
                    productSize={product.size}
                    productPrice={product.price} />
            ))} */}
            <CartCard productImage='./assets/images/radu-florin-OP8655xgBjo-unsplash.jpg'
                productName='mariyoul'
                productCategory='category1'
                productDescription='qdfsdfsdfsdfdfsfs'
                productSize='m'
                productAmount={2}
                productPrice={40}
            />
        </Box>
    );
}

export default CartProducts;