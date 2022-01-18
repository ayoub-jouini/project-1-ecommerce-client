import React from "react";
import CarouselComponent from "../components/carousel/Carousel";
import ProductsRow from "../components/ProductsRow.tsx/ProductsRow";

const products = [
    {
        productName: "maryoul1",
        productCategory: "category1",
        image: "./assets/images/radu-florin-OP8655xgBjo-unsplash.jpg",
        description: "maryoul behi barcha",
        price: 60000,
        onStock: true,
        size: ["s", "m", "l"],
        bestDesplay: true
    },
    {
        productName: "maryoul2",
        productCategory: "category1",
        image: "./assets/images/afb9a61c-065a-4331-a7c1-a2b1a80b85ef.jpg",
        description: "maryoul behi barcha",
        price: 60000,
        onStock: true,
        size: ["s", "m", "l"],
        bestDesplay: true
    },
    {
        productName: "serwel1",
        productCategory: "category2",
        image: "./assets/images/christian-bolt-VW5VjskNXZ8-unsplash.jpg",
        description: "maryoul behi barcha",
        price: 60000,
        onStock: true,
        size: ["s", "m", "l"],
        bestDesplay: true
    },
    {
        productName: "serwel2",
        productCategory: "category2",
        image: "./assets/images/mahdi-bafande-6f5KtX2GGv4-unsplash.jpg",
        description: "maryoul behi barcha",
        price: 60000,
        onStock: true,
        size: ["s", "m", "l"],
        bestDesplay: true
    }
]

const Home: React.FC = () => {
    return (
        <div>
            <CarouselComponent />
            <ProductsRow title="BEST-SELLER" products={products} />
            <ProductsRow title="NEW-PRODUCTS" products={products} />
        </div>
    );
}

export default Home;