import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    id: string;
    name: string;
    description: string;
    price: Number;
    category: string;
    image: string;
}

const ProductCardMin: React.FC<Props> = ({ id, name, description, price, category, image }) => {
    return (
        <Link to={`/products/${category}/${id}`}>
            <Card sx={{ display: 'flex', height: "6rem", marginTop: "1rem" }}>
                <CardMedia
                    component="img"
                    sx={{ width: "40%" }}
                    image={`http://localhost:5000/${image}`}
                    alt={image}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', display: "flex" }}>
                        <Box sx={{ width: "70%" }}>
                            <Typography component="div" variant="h6">
                                {name}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component="div">
                                {price}TND
                            </Typography>
                        </Box>
                        <Box sx={{ width: "20%", height: "100%" }}>
                            <Button sx={{ width: "100%", height: "100%" }} >
                                Buy
                            </Button>
                        </Box>
                    </CardContent>
                </Box>

            </Card>
        </Link>
    );
}

export default ProductCardMin;