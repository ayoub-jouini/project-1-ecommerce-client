import React, { useEffect, useReducer, useState } from 'react'

type CartProviderProps = { children: React.ReactNode }

const CartStateContext = React.createContext<
    {
        cart: any;
        totalPrice: () => number;
        addToCart: (product: any) => void;
        removeFromCart: (productId: string) => void
    } | undefined
>(undefined)

const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState([])

    const searchProductIndex = (productId: string) => {
        let index = -1;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                // @ts-ignore
                if (cart[i].id === productId) {
                    index = i;
                }
                break;
            }
        }
        return index;


    }

    const addToCart = (product: any) => {
        let cartArray = cart;
        const productIndex = searchProductIndex(product.id);
        if (productIndex === -1) {
            // @ts-ignore
            cartArray.push(product);
        } else {
            // @ts-ignore
            cartArray[productIndex].amount = cartArray[productIndex].amount + 1;
        }
        setCart(cartArray);
    }

    const removeFromCart = (productId: any) => {
        let cartArray = cart;
        const productIndex = searchProductIndex(productId);
        const cartArray1 = cartArray.slice(0, productIndex);
        const cartArray2 = cartArray.slice(productIndex + 1);
        // @ts-ignore
        setCart(cartArray1.push(cartArray2));
    }

    const totalPrice = () => {
        let tPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            // @ts-ignore
            tPrice = tPrice + (cart[i].price * cart[i].amount);
        }

        return tPrice;
    }

    return (
        <CartStateContext.Provider value={{ cart, totalPrice, addToCart, removeFromCart }}>
            {children}
        </CartStateContext.Provider>
    )
}

const useCart = () => {
    const context = React.useContext(CartStateContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export { CartProvider, useCart }