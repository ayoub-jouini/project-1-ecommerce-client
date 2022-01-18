import React from "react"
import Carousel from 'react-material-ui-carousel'
import CarouselItem from "./CarouselItem"

const CarouselComponent: React.FC = () => {
    const items = [
        {
            image: ['./assets/images/fabian-albert-AvnXTPOPVHY-unsplash.jpg', './assets/images/sour-moha-9HKbzzbBDrI-unsplash.jpg'],
            name: "Promotions",
            description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!"
        },
        {
            image: ['./assets/images/lucas-andrade-g_Z0a-OaJCA-unsplash.jpg', './assets/images/samanta-sokolova-IssN_tkvVWs-unsplash.jpg'],
            name: "Promotions",
            description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <CarouselItem key={i} name={item.name} description={item.description} image={item.image} />)
            }
        </Carousel>
    )
}

export default CarouselComponent;