import { Box, Card, CardActionArea, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const AboutUs: React.FC = () => {
    return (
        <Box>
            <Breadcrumb pageName="About Us" />
            <Container sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: "70%", margin: "3rem 0" }}>
                    <Typography variant="h4" component="h2" >Who are we?</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit, quasi quae vero quisquam iure earum officia amet commodi voluptatibus fuga animi molestias, odio doloremque excepturi voluptatum perferendis tempore iste!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est molestias ullam velit! Quos perferendis, blanditiis quod vero ipsa nulla, voluptatem delectus deleniti corrupti eos omnis itaque aspernatur optio numquam?</Typography>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="./assets/images/charles-etoroma-k78R0lDxd48-unsplash.jpg"
                                alt="charles-etoroma-k78R0lDxd48-unsplash.jpg"
                                sx={{ height: "30rem" }}
                            />
                        </CardActionArea>
                    </Card>
                </Box>
                <Box sx={{ width: "70%", margin: "3rem 0" }}>
                    <Typography variant="h4" component="h2" >Our Services</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit, quasi quae vero quisquam iure earum officia amet commodi voluptatibus fuga animi molestias, odio doloremque excepturi voluptatum perferendis tempore iste!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est molestias ullam velit! Quos perferendis, blanditiis quod vero ipsa nulla, voluptatem delectus deleniti corrupti eos omnis itaque aspernatur optio numquam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia sed quae perferendis corporis eaque, delectus voluptatum inventore commodi, quo exercitationem nulla! Inventore ab voluptatibus, at nulla facere aut fugiat.</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Card sx={{ width: "49%" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="./assets/images/hannah-morgan-ycVFts5Ma4s-unsplash.jpg"
                                alt="hannah-morgan-ycVFts5Ma4s-unsplash.jpg"
                                sx={{ height: "30rem" }}
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: "49%" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="./assets/images/victor-3YW2jxSblE8-unsplash.jpg"
                                alt="victor-3YW2jxSblE8-unsplash.jpg"
                                sx={{ height: "30rem" }}
                            />
                        </CardActionArea>
                    </Card>
                </Box>
                <Box sx={{ width: "70%", margin: "3rem 0" }}>
                    <Typography variant="h4" component="h2" >Our Products</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit, quasi quae vero quisquam iure earum officia amet commodi voluptatibus fuga animi molestias, odio doloremque excepturi voluptatum perferendis tempore iste!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est molestias ullam velit! Quos perferendis, blanditiis quod vero ipsa nulla, voluptatem delectus deleniti corrupti eos omnis itaque aspernatur optio numquam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia sed quae perferendis corporis eaque, delectus voluptatum inventore commodi, quo exercitationem nulla! Inventore ab voluptatibus, at nulla facere aut fugiat.</Typography>
                </Box>
            </Container>
        </Box >
    );
}

export default AboutUs;