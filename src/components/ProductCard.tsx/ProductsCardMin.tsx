import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

interface Props {
    name: string;
    description: string;
    price: Number;
    category: string;
    image: string;
}

const ProductCardMin: React.FC<Props> = ({ name, description, price, category, image }) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={image}
                alt={image}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {price}
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
}

export default ProductCardMin;