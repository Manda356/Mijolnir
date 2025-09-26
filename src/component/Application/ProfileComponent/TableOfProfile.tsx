import React from 'react';
import {Button, Grid} from "@mui/material";
import useStyles from "../../../Style/Style";

const TableOfProfile = () => {
    const classes: any = useStyles()

    return (
        <Grid container className={ classes.ButtonProfile }>
            <Button variant="contained">Birthday</Button>
            <Button variant="contained">Collaborator</Button>
            <Button variant="contained">Name</Button>
            <Button variant="contained">Email</Button>
            <Button variant="contained">Contact</Button>
            <Button variant="contained">Addition</Button>
        </Grid>
    );
};

export default TableOfProfile;