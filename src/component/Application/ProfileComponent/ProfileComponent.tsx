import React from 'react';
import {Box} from "@mui/material";
import ProfilePictures from "./ProfilePictures";
import UsernameProfiles from "./UsernameProfiles";
import EmailProfiles from "./EmailProfiles";
import TableOfProfile from "./TableOfProfile";
import useStyles from "../../../Style/Style";

const ProfileComponent = () => {
    const classes: any = useStyles()

    return (
        <Box component="main" className={ classes.ContainerProfile }>
            <ProfilePictures />
            <UsernameProfiles />
            <EmailProfiles />
            <TableOfProfile />
        </Box>
    );
};

export default ProfileComponent;