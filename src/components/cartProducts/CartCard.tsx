import { Box, Card, CardContent, CardMedia, FormControl, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useCart } from '../../utils/CartContext';

interface Props {
    productId: string;
    productImage: string;
    productName: string;
    productSize: string;
    productPrice: number;
    productAmount: number;
}

const CartCard: React.FC<Props> = ({ productId, productImage, productName, productSize, productPrice, productAmount }) => {

    const { removeFromCart, changeAmount } = useCart();

    const [amount, setAmount] = useState<number>(productAmount);
    const [totalPrice, setTotalPrice] = useState<number>(productPrice * productAmount)

    useEffect(() => {
        changeAmount(productId, productSize, amount)
    }, [amount, productId, productSize, changeAmount])

    const plusHandleChange = () => {
        setAmount(amount + 1)
    }

    const minusHandleChange = () => {
        setAmount(amount - 1)
    }

    const amounthandleChange = (event: any) => {
        setAmount(event.target.value)
    }

    useEffect(() => {
        setTotalPrice(productPrice * amount)
    }, [amount, productPrice])

    return (
        <Card sx={{ display: "flex", justifyContent: "space-between", margin: "1rem 0" }}>
            <CardMedia
                sx={{ width: "20%" }}
                component="img"
                height="150"
                image={`${process.env.REACT_APP_ASSET_URL}/${productImage}`}
                alt={productImage} />
            <CardContent sx={{ width: "75%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Typography variant='h5' component="h3" sx={{ fontSize: "1.2rem" }}>{productName}</Typography>
                    <Typography variant='h6' component="h5" sx={{ fontSize: "1.1rem" }}>Size: {productSize}</Typography>
                    <Typography variant='h5' component="h4" sx={{ fontSize: "1.1rem" }}>{productPrice}TND</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "55%", flexDirection: { xs: "column", md: "row" } }}>
                    <Box sx={{ width: { md: "60%", xs: "100%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <FormControl sx={{ width: "100%" }} >
                            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
                                <TextField
                                    id="demo-simple-select2"
                                    value={amount}
                                    label="Quantity"
                                    onChange={amounthandleChange}
                                    sx={{ width: "80%" }}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "15%" }}>
                                    <Box sx={{
                                        border: 1,
                                        height: "25px",
                                        width: "100%",
                                        borderRadius: "0.2rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderColor: "primary.light"
                                    }} onClick={plusHandleChange}>
                                        <ArrowDropUpIcon />
                                    </Box>
                                    <Box sx={{
                                        border: 1,
                                        height: "25px",
                                        width: "100%",
                                        borderRadius: "0.2rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderColor: "primary.light"
                                    }} onClick={minusHandleChange}>
                                        <ArrowDropDownIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: { xs: "100%", md: "40%" }, marginTop: { xs: "0.5rem", md: "0" } }}>
                        <Box sx={{ marginLeft: { md: "1rem", xs: "0" } }} >
                            <Typography variant="h5" component="h4" sx={{ fontSize: "1.1rem" }}> {totalPrice}TND</Typography>
                        </Box>
                        <Box onClick={() => { removeFromCart(productId, productSize) }}>
                            <DeleteForeverIcon fontSize="large" sx={{ cursor: "pointer", marginRight: { xs: "-0.6rem", md: "0" } }} />
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default CartCard;