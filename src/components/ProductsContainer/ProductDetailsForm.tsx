import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Props {
    productSize: string[];
}

const ProductDetailsForm: React.FC<Props> = ({ productSize }) => {

    const [size, setSize] = useState('');
    const [count, setCount] = useState<number>(1);

    const handleChange = (event: any) => {
        setSize(event.target.value as string);
    };

    const plusHandleChange = () => {
        setCount(count + 1)
    }

    const minusHandleChange = () => {
        setCount(count - 1)
    }

    const CounthandleChange = (event: any) => {
        setCount(event.target.value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: "100%" }} >
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <FormControl sx={{ width: "40%" }}>
                    <InputLabel id="demo-simple-select-label1">Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label1"
                        id="demo-simple-select1"
                        value={size}
                        label="Age"
                        onChange={handleChange}
                        sx={{ width: "100%" }}
                    >
                        {
                            productSize.map((s: any, key: any) => (
                                <MenuItem key={key} value={s}>{s}</MenuItem>
                            ))
                        }

                    </Select>
                </FormControl>
                <FormControl sx={{ width: "40%" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                        <TextField
                            id="demo-simple-select2"
                            value={count}
                            label="Quantity"
                            onChange={CounthandleChange}
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
            <Box sx={{ width: "100%", height: "50px", margin: "20px" }} >
                <Button onClick={handleSubmit} variant="contained" sx={{ width: "100%", height: "100%" }} >Add to card</Button>
            </Box>
        </form>
    );
}

export default ProductDetailsForm;