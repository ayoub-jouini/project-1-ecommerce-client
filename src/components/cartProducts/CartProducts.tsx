import { Box } from '@mui/material';
import React from 'react'
import { useCart } from '../../utils/CartContext';
import CartCard from './CartCard';
import CartValidation from './CartValidation';

const CartProducts: React.FC = () => {

    const { cart, quantity, totalPrice } = useCart()

    return (
        <Box>
            {cart.map((product: any, key: any) => (
                <CartCard
                    key={key}
                    productId={product.id}
                    productImage={product.image}
                    productName={product.name}
                    productSize={product.size}
                    productAmount={product.amount}
                    productPrice={product.price} />
            ))}
            <CartValidation quantity={quantity} totalPrice={totalPrice} />
        </Box>
    );
}

export default CartProducts;