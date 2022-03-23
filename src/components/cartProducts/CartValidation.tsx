import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
    quantity: number;
    totalPrice: () => number;
}

const CartValidation: React.FC<Props> = ({ quantity, totalPrice }) => {
    const [disableButton, setDisableButton] = useState<boolean>(true)
    const price = totalPrice();

    useEffect(() => {
        if (quantity > 0) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [quantity])

    return (
        <Card sx={{ margin: "1rem 0", height: "8rem" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>
                <Box>
                    <Typography variant="h6">{quantity} products</Typography>
                    <Typography variant="h6">Total price: {price}TND </Typography>
                </Box>
                <Box sx={{ height: "80%", display: "flex", alignItems: 'flex-end' }}>
                    <Button disabled={disableButton} variant="contained">validate</Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CartValidation;