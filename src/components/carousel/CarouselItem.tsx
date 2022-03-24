import React from "react";
import { Paper, Button, Typography, Box, Grid } from '@mui/material'
import { Link } from "react-router-dom";


interface Props {
    name: string;
    description: string;
    image: string[];
    pageLink: string;
}


const CarouselItem: React.FC<Props> = ({ name, description, image, pageLink }) => {
    return (
        <Paper style={{ height: "700px" }}>
            <Grid container sx={{ height: "100%" }} >
                <Grid item sm={4} >
                    <Box sx={{ backgroundImage: `url(${image[0]})`, backgroundSize: 'cover', height: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={4} sx={{ backgroundColor: "secondary.main", backgroundImage: { xs: `url(${image[0]})`, sm: "none" }, backgroundSize: 'cover' }}>
                    <Box sx={{
                        backgroundColor: { xs: "rgba(0, 0, 0, 0.3)", sm: "rgba(0, 0, 0, 0)" },
                        height: "100%",
                        padding: "10%",
                        color: { xs: "white", sm: "black" },
                        display: { xs: "flex", sm: "block" },
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Typography variant="h3" sx={{ marginBottom: { sm: '30px', xs: "4rem" } }} >{name}</Typography>
                        <Typography variant="body1" sx={{ marginBottom: { sm: '30px', xs: "4rem" }, textAlign: { xs: "center", sm: "left" } }}>{description}</Typography>
                        <Link to={pageLink}>
                            <Button variant="outlined" className="CheckButton" sx={{ height: "100px", width: { sm: "80%", xs: "20rem" }, borderWidth: "3px", marginBottom: '30px', color: { sm: "primary.main", xs: "white" }, borderColor: { xs: "white", sm: "primary.main" } }}>
                                Check it out!
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box sx={{ backgroundImage: `url(${image[1]})`, backgroundSize: 'cover', height: "100%" }} />
                </Grid>
            </Grid >

        </Paper >
    )
}

export default CarouselItem;