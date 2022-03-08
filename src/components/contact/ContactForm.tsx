import { Button, Card, CardActionArea, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {

    const [firstName, setFirstName] = useState<String>("");
    const [lastName, setLastName] = useState<String>("");
    const [email, setEmail] = useState<String>("");
    const [phoneNB, setPhoneNB] = useState<String>("");
    const [message, setMessage] = useState<String>("");

    const handleFistName = (event: any) => {
        setFirstName(event.target.value)
    }

    const handleLastName = (event: any) => {
        setLastName(event.target.value)
    }

    const handleEmail = (event: any) => {
        setEmail(event.target.value)
    }

    const handlePhoneNB = (event: any) => {
        setPhoneNB(event.target.value)
    }

    const handleMessage = (event: any) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }
    return (
        <Container>
            <Grid container justifyContent="space-between" sx={{ margin: "4rem 0", marginBottom: "7rem" }} >
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="./assets/images/burgess-milner-OYYE4g-I5ZQ-unsplash.jpg"
                                alt="burgess-milner-OYYE4g-I5ZQ-unsplash.jpg"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <Typography variant="h4" component="h2" sx={{ marginBottom: "0.5rem" }}>Contact Us</Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                            <TextField label="First Name" value={firstName} onChange={handleFistName} sx={{ width: "49%" }} />
                            <TextField label="Last Name" value={lastName} onChange={handleLastName} sx={{ width: "49%" }} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                            <TextField label="Email" value={email} onChange={handleEmail} sx={{ width: "49%" }} />
                            <TextField label="Phone Number" value={phoneNB} onChange={handlePhoneNB} sx={{ width: "49%" }} />
                        </Box>
                        <Box sx={{ marginBottom: "0.5rem" }}>
                            <TextField multiline rows={5} label="Message" value={message} onChange={handleMessage} sx={{ width: "100%" }} />
                        </Box>
                        <Box>
                            <Button onClick={handleSubmit} variant="contained" sx={{ width: "100%" }} >Send</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactForm;