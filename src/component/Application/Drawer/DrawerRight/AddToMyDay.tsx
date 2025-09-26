import React from 'react';
import {Typography} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ListItemButton from "@mui/material/ListItemButton";

const AddToMyDay = () => {
    return (
        <ListItemButton sx={{p:1.5}}>
            <WbSunnyIcon fontSize="small" sx={{mr:2}}/>

            <Typography variant="body2">
                Add to my day
            </Typography>
        </ListItemButton>
    );
};

export default AddToMyDay;