import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";

const Contact: React.FC = () => {
    return (
        <Box>
            <Breadcrumb pageName="Contact" />
            <ContactForm />
        </Box>
    );
}

export default Contact;