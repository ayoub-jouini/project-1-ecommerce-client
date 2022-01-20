import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const NewsLetter: React.FC = () => {

    const [email, setEmail] = useState("");

    const changeEmail = (event: any) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: { xs: "200px", md: "150px" },
            backgroundColor: "secondary.main"
        }}>
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid container spacing={4}>
                    <Grid item sm={12} md={6} >
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <NewspaperIcon sx={{ fontSize: 60, marginRight: "20px" }} color='primary' />
                            <Typography variant='h5' color="primary" >SUBSCRIBE TO THE NEWSLETTER</Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} >
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <form onSubmit={handleSubmit} style={{ width: "100%" }} >
                                <TextField
                                    label="Email"
                                    value={email}
                                    onChange={changeEmail}
                                    color="primary"
                                    sx={{
                                        width: "70%"
                                    }}
                                />
                                <Button type="submit"
                                    variant="contained"
                                    sx={{
                                        width: "30%",
                                        height: "55px"
                                    }} >
                                    Submit
                                </Button>
                            </form>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default NewsLetter;