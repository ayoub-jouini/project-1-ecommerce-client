import { Breadcrumbs, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useParams } from "react-router-dom";

interface Props {
    pageName?: string;
}

const Breadcrumb: React.FC<Props> = ({ pageName }) => {

    const params = useParams();

    return (
        <Box sx={{
            height: "1.5rem",
            padding: "2rem",
            backgroundColor: "primary.light",
            color: "#ECECEC"
        }}>
            <Container sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "space-between" }
            }}>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Typography variant="h5">
                        {params.category || pageName}
                    </Typography>
                </Box>
                {
                    !pageName && <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/">
                            <Typography variant="body1" color="#ECECEC">
                                Home
                            </Typography>
                        </Link>
                        <Link
                            to=""
                        >
                            <Typography variant="body1" color="#ECECEC">
                                Products
                            </Typography>
                        </Link>
                        <Link to="">
                            <Typography variant="body1" color="#ECECEC">
                                {params.category}
                            </Typography>
                        </Link>
                    </Breadcrumbs>
                }

            </Container>
        </Box>

    );
}

export default Breadcrumb;