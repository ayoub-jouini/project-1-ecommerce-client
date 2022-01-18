import React from "react";
import { Paper, Button, Typography, Box, Grid } from '@mui/material'


interface Props {
    name: string;
    description: string;
    image: string[]
}


const CarouselItem: React.FC<Props> = ({ name, description, image }) => {
    return (
        <Paper style={{ height: "700px" }}>
            <Grid container sx={{ height: "100%" }} >
                <Grid item sm={4} >
                    <Box sx={{ backgroundImage: `url(${image[0]})`, backgroundSize: 'cover', height: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={4} sx={{ backgroundColor: "secondary.main", }}>
                    <Box sx={{
                        height: "80%",
                        margin: "10%",
                    }}>
                        <Typography variant="h3" style={{ marginBottom: '30px' }} >{name}</Typography>
                        <Typography variant="body1" style={{ marginBottom: '30px' }}>{description}</Typography>
                        <Button variant="outlined" className="CheckButton" color="primary" sx={{ height: "100px", width: "80%", borderWidth: "3px", marginBottom: '30px' }}>
                            Check it out!
                        </Button>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box sx={{ backgroundImage: `url(${image[1]})`, backgroundSize: 'cover', height: "100%" }} />
                </Grid>
            </Grid>

        </Paper>
    )
}

export default CarouselItem;