import React from 'react';
import {Box, CardMedia} from "@mui/material";
import sary from "../../../assets/logo/todo list_blue.png";
import useStyles from "../../../Style/Style";

const ProfilePictures = () => {

    const classes: any = useStyles()

    return (
        <Box className={ classes.ProfilePictures }>
            <CardMedia component="img"
                       height="200"
                       image={sary}
                       alt="profile-picture"/>
        </Box>
    );
};

export default ProfilePictures;