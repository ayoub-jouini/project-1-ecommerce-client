import { Grid } from "@mui/material";
import React from "react";
import Attribute from "./Attribute";
import AttributeTitle from "./AttributesTitle";

interface Props {
    title: string;
    atributs: string[];
}

const GridItem: React.FC<Props> = ({ title, atributs }) => {
    return (
        <Grid item xs={12} sm={3}>
            <AttributeTitle title={title} />
            {atributs.map((atribut, key) => (
                <Attribute key={key} name={atribut} />
            ))}
        </Grid>
    );
}

export default GridItem;