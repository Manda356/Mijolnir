import React from 'react';
import {Box, Grid} from "@mui/material";
import ImageButton from "../Button/Navbar_button/ImageButton";
import MoreButton from "../Button/Navbar_button/MoreButton";
import ProfileButton from "../Button/Navbar_button/ProfileButton";

const ToolsList = () => {

    const IconList = [
        <ImageButton />,
        <MoreButton />,
        <ProfileButton/>
    ]

    return (
        <React.Fragment>
            <Grid container spacing={1.5} maxWidth={135}>
                { IconList?.map((item, index) =>
                    <Grid key={ index } item>{ item }</Grid>)}
            </Grid>
        </React.Fragment>
    );
};

export default ToolsList;