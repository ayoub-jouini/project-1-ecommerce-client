import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GridItem from './GridItem';

const data = [
    {
        title: "LIENS UTILES",
        atributs: ["Services", "News", "Magasins"]
    },
    {
        title: "Informations",
        atributs: ["About Us", "Contact", "Blog"]
    },
    {
        title: "Products",
        atributs: ["Promotions", "New Products", "Best selles"]
    }
];

const Footer: React.FC = () => {
    return (
        <footer style={{ marginTop: "50px" }}>
            <Box sx={{ backgroundColor: "primary.main" }} color="#ECECEC">
                <Container maxWidth="lg">
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={3}>
                            <Box sx={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                                <AddLocationIcon sx={{ marginRight: "5px" }} />
                                <Typography>
                                    Megrin Riadh
                                </Typography>
                            </Box>
                            <Box sx={{ marginBottom: "15px", display: "flex", alignItems: "center" }} >
                                <PhoneIcon sx={{ marginRight: "5px" }} />
                                <Typography>
                                    95651756
                                </Typography>
                            </Box>
                            <Box sx={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                                <AlternateEmailIcon sx={{ marginRight: "5px" }} />
                                <Typography>
                                    ayoubjouini135@gmail.com
                                </Typography>
                            </Box>
                            <Box sx={{ marginBottom: "15px", display: "flex" }}>
                                <a href="https://www.facebook.com/ayoub.jouini.79" style={{ color: "white" }}>
                                    <FacebookIcon sx={{ marginRight: '5px' }} />
                                </a>
                                <a href="https://www.instagram.com/ayoub_jouini/" style={{ color: "white" }}>
                                    <InstagramIcon sx={{ marginRight: '5px' }} />
                                </a>
                                <TwitterIcon sx={{ marginRight: '5px' }} />
                                <a href="https://www.linkedin.com/in/mohamed-ayoub-jouini-254152205/" style={{ color: "white" }}>
                                    <LinkedInIcon sx={{ marginRight: '5px' }} />
                                </a>
                            </Box>
                        </Grid>
                        {
                            data.map((d, key) => (
                                <GridItem key={key} title={d.title} atributs={d.atributs} />
                            ))
                        }
                    </Grid>
                </Container>
            </Box >

        </footer >
    );
}

export default Footer;