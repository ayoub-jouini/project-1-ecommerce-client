import { Box, Button, Card, CardContent, CardMedia, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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

    const [amount, setAmount] = useState<number>(productAmount);
    const [totalPrice, setTotalPrice] = useState<number>(productPrice * productAmount)

    const plusHandleChange = () => {
        setAmount(amount + 1)
    }

    const minusHandleChange = () => {
        setAmount(amount - 1)
    }

    const amounthandleChange = (event: any) => {
        setAmount(event.target.value)
    }

    return (
        <Card sx={{ display: "flex", justifyContent: "space-between", margin: "1rem 0" }}>
            <CardMedia
                sx={{ width: "20%" }}
                component="img"
                image={`http://localhost:5000/${productImage}`}
                alt={productImage} />
            <CardContent sx={{ width: "75%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <Box>
                        <Typography variant='body1' component="h3" >{productName}</Typography>
                        <Typography variant='body1' component="h5">Size: {productSize}</Typography>
                        <Typography variant='body2' component="h4">{productPrice}TND</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" } }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: { xs: "100%", md: "40%" } }}>
                            <Box>
                                <Typography variant="body2" component="h4"> {totalPrice}TND</Typography>
                            </Box>
                            <Box onClick={() => { removeFromCart(productId) }}>
                                <DeleteForeverIcon fontSize="small" sx={{ cursor: "pointer" }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ float: "right" }}>
                    <Typography variant="body2" >{amount}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SideCartElement;