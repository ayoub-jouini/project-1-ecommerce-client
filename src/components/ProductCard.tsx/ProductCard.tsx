import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface Props {
    name: string;
    description: string;
    price: Number;
    category: string;
    image: string;
}

const ProductCard: React.FC<Props> = ({ name, description, price, category, image }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt="green iguana"
                />
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                <Button size="small" color="primary">
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
}


export default ProductCard;