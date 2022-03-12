import { Box } from '@mui/material';
import React, { useContext } from 'react'
import { useCart } from '../../utils/Cart-Context';
import CartCard from './CartCard';

const CartProducts: React.FC = () => {

    const { cart, addToCart, removeFromCart } = useCart()

    return (
        <Box>
            {cart.map((product: any, key: any) => (
                <CartCard
                    key={key}
                    productImage={product.image}
                    productName={product.name}
                    productSize={product.size}
                    productAmount={product.amount}
                    productPrice={product.price} />
            ))}
            {/* <CartCard productImage='./assets/images/radu-florin-OP8655xgBjo-unsplash.jpg'
                productName='mariyoul'
                productCategory='category1'
                productDescription='qdfsdfsdfsdfdfsfs'
                productSize='m'
                productAmount={2}
                productPrice={40}
            /> */}
        </Box>
    );
}

export default CartProducts;