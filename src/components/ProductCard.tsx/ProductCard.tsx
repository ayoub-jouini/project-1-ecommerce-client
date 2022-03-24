import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    name: string;
    description: string;
    price: Number;
    category: string;
    image: string;
}

const ProductCard: React.FC<Props> = ({ id, name, description, price, category, image }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/products/${category}/${id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={`${process.env.REACT_APP_ASSET_URL}/${image}`}
                        alt="green iguana"
                    />
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}TND
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                <Button size="small" color="primary">
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
}


export default ProductCard;