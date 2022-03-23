import React, { useState } from 'react'

type CartProviderProps = { children: React.ReactNode }

interface CartProps {
    id: string;
    image: string;
    name: string;
    size: string;
    amount: number;
    price: number;
}

const CartStateContext = React.createContext<
    {
        cart: CartProps[];
        quantity: number;
        totalPrice: () => number;
        addToCart: (product: any) => void;
        removeFromCart: (productId: string, productSize: string) => void
        changeAmount: (productId: string, productSize: string, productAmount: number) => void;
    } | undefined
>(undefined)

const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartProps[]>([])
    const [quantity, setQauntity] = useState<number>(0);

    const sizeAndQuantityCheck = (size: string, amount: number): boolean => {
        let check = true;
        if (size === '') {
            check = false;
        }
        if (amount < 1) {
            check = false
        }

        return check;
    }

    const searchProductIndex = (productId: string, productSize: string) => {
        let index = -1;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                // @ts-ignore
                if (cart[i].id === productId && cart[i].size === productSize) {
                    index = i;
                    break;
                }

            }
        }
        return index;
    }

    const addToCart = (product: any) => {
        let cartArray: CartProps[] = cart;
        let sizeAndQuantity = sizeAndQuantityCheck(product.size, product.amount)
        let productIndex = searchProductIndex(product.id, product.size);
        if (sizeAndQuantity) {
            if (productIndex === -1) {
                cartArray.push(product);
            } else if (cartArray[productIndex].size === product.size) {
                cartArray[productIndex].amount = cartArray[productIndex].amount + product.amount;
            }
            setCart(cartArray);
            setQauntity(quantity + product.amount)
        }
    }

    const removeFromCart = (productId: any, productSize: string) => {
        let cartArray = cart;
        let productIndex = searchProductIndex(productId, productSize);
        setQauntity(quantity - cart[productIndex].amount)
        if (productIndex === 0) {
            let cartArray2 = cartArray.slice(productIndex + 1);
            setCart(cartArray2);
        } else {
            let cartArray1 = cartArray.slice(0, productIndex);
            let cartArray2 = cartArray.slice(productIndex + 1);
            if (!cartArray2) {
                setCart(cartArray1)
            } else {
                cartArray1.concat(cartArray2)
                setCart(cartArray1);
            }
        }

    }

    const totalPrice = () => {
        let tPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            // @ts-ignore
            tPrice = tPrice + (cart[i].price * cart[i].amount);
        }

        return tPrice;
    }

    const changeAmount = (productId: string, productSize: string, productAmount: number) => {
        if (productAmount > 0) {
            let productIndex = searchProductIndex(productId, productSize);
            let cartArray = cart;
            let productsQuantity = (quantity - cartArray[productIndex].amount) + productAmount;
            cartArray[productIndex].amount = productAmount;
            setCart(cartArray)
            setQauntity(productsQuantity)
        }
    }

    return (
        <CartStateContext.Provider value={{ cart, quantity, totalPrice, addToCart, removeFromCart, changeAmount }}>
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