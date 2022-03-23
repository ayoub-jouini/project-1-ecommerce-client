import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useCart } from "../../utils/Cart-Context";

interface Props {
    productId: string;
    productImage: string;
    productName: string;
    productSize: string;
    productPrice: number;
    productAmount: number;
}

const SideCartElement: React.FC<Props> = ({ productId, productImage, productName, productSize, productPrice, productAmount }) => {

    const { removeFromCart } = useCart();

    const [totalPrice, setTotalPrice] = useState<number>(productPrice * productAmount)

    useEffect(() => {
        setTotalPrice(productPrice * productAmount)
    }, [productAmount, productPrice])

    return (
        <Card sx={{ display: "flex", justifyContent: "space-between", margin: "1rem 0", height: '7rem' }}>
            <CardMedia
                sx={{ width: "25%" }}
                component="img"
                image={`http://localhost:5000/${productImage}`}
                alt={productImage} />
            <CardContent sx={{ width: "70%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <Box>
                        <Typography variant='body1' component="h5" >{productName}</Typography>
                        <Typography variant='body1' component="h5">Size: {productSize}</Typography>
                        <Typography variant='body2' component="h4">{productPrice}TND</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" } }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: { xs: "100%", md: "40%" } }}>
                            <Box>
                                <Typography variant="body2" component="h4"> {totalPrice}TND</Typography>
                            </Box>
                            <Box onClick={() => { removeFromCart(productId, productSize) }}>
                                <DeleteForeverIcon fontSize="small" sx={{ cursor: "pointer" }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ float: "right" }}>
                    <Typography variant="body2" >{productAmount}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SideCartElement;