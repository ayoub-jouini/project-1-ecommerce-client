import React from "react"
import Carousel from 'react-material-ui-carousel'
import CarouselItem from "./CarouselItem"

const CarouselComponent: React.FC = () => {
    const items = [
        {
            image: ['./assets/images/fabian-albert-AvnXTPOPVHY-unsplash.jpg', './assets/images/sour-moha-9HKbzzbBDrI-unsplash.jpg'],
            name: "Promotions",
            description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!",
            pageLink: "promotions"
        },
        {
            image: ['./assets/images/lucas-andrade-g_Z0a-OaJCA-unsplash.jpg', './assets/images/samanta-sokolova-IssN_tkvVWs-unsplash.jpg'],
            name: "New Products",
            description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!",
            pageLink: "news"
        },
        {
            image: ['./assets/images/raamin-ka-74jERQtN1V4-unsplash.jpg', './assets/images/tatiana-pavlova-Zc9y_Ijgebc-unsplash.jpg'],
            name: "About US",
            description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!",
            pageLink: "about"
        }
    ]

    return (
        <Carousel className="carouselComponent" >
            {
                items.map((item, i) => <CarouselItem key={i} name={item.name} description={item.description} image={item.image} pageLink={item.pageLink} />)
            }
        </Carousel>
    )
}

export default CarouselComponent;