import { createContext } from "react";

interface Product {
    image: string;
    name: string;
    category: string;
    description: string;
    size: string;
    amount: number;
    price: number;
}

interface Props {
    products: Product[];
    totalPrice: number;
}

const CartContext = createContext<Props>({ products: [], totalPrice: 0 })

export default CartContext;