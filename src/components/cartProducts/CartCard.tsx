import { Box, Button, Card, CardContent, CardMedia, FormControl, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Props {
    productImage: string;
    productName: string;
    productCategory: string;
    productDescription: string;
    productSize: string;
    productPrice: number;
    productAmount: number;
}

const CartCard: React.FC<Props> = ({ productImage, productName, productCategory, productDescription, productSize, productPrice, productAmount }) => {

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

    const handleDeleteProduct = () => {

    }

    useEffect(() => {
        setTotalPrice(productPrice * amount)
    }, [amount])

    return (
        <Card sx={{ display: "flex", justifyContent: "space-between" }}>
            <CardMedia
                sx={{ width: "20%" }}
                component="img"
                height="150"
                image={productImage}
                alt={productImage} />
            <CardContent sx={{ width: "75%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Typography variant='h5' component="h3">{productName}</Typography>
                    <Typography variant='h6' component="h5">Size: {productSize}</Typography>
                    <Typography variant='h5' component="h4">{productPrice}TND</Typography>
                </Box>
                <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
                    <FormControl sx={{ width: "50%" }} >
                        <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                            <TextField
                                id="demo-simple-select2"
                                value={amount}
                                label="Quantity"
                                onChange={amounthandleChange}
                                sx={{ width: "80%" }}
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            />
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "15%" }}>
                                <Button sx={{ border: 1, height: "25px", width: "100%" }} onClick={plusHandleChange}>
                                    <ArrowDropUpIcon />
                                </Button>
                                <Button sx={{ border: 1, height: "25px" }} onClick={minusHandleChange}>
                                    <ArrowDropDownIcon />
                                </Button>
                            </Box>
                        </Box>
                    </FormControl>
                </Box>
                <Box>
                    <Typography variant="h5" component="h4"> {totalPrice}TND</Typography>
                </Box>
                <Box onClick={handleDeleteProduct}>
                    <DeleteForeverIcon fontSize="large" sx={{ cursor: "pointer" }} />
                </Box>
            </CardContent>
        </Card>
    );
}

export default CartCard;