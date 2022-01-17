import React from "react"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardMedia, Typography, CardContent, Box, Grid } from '@mui/material'

interface Props {
    name: string;
    description: string;
    image: string[]
}



const Example: React.FC = () => {
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
                items.map((item, i) => <Item key={i} name={item.name} description={item.description} image={item.image} />)
            }
        </Carousel>
    )
}

const Item: React.FC<Props> = ({ name, description, image }) => {
    return (
        <Paper style={{ height: "700px" }}>
            <Grid container sx={{ height: "100%" }} >
                <Grid item sm={4} >
                    <Box sx={{ backgroundImage: `url(${image[0]})`, backgroundSize: 'cover', height: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={4} sx={{ backgroundColor: "secondary.main", }}>
                    <Box sx={{
                        height: "80%",
                        margin: "10%",
                    }}>
                        <Typography variant="h3" style={{ marginBottom: '30px' }} >{name}</Typography>
                        <Typography variant="body1" style={{ marginBottom: '30px' }}>{description}</Typography>
                        <Button variant="outlined" className="CheckButton" color="primary" sx={{ height: "100px", width: "80%", borderWidth: "3px", marginBottom: '30px' }}>
                            Check it out!
                        </Button>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box sx={{ backgroundImage: `url(${image[1]})`, backgroundSize: 'cover', height: "100%" }} />
                </Grid>
            </Grid>

        </Paper>
    )
}

// const CarouselComponent: React.FC = () => {
//     return (
//         <div>

//         </div>
//     );
// }

export default Example;