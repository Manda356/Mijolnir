import React from 'react';
import {ListItemIcon, ListItemText} from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MenuItem from "@mui/material/MenuItem";

const Personalize = () => {
    return (
        <MenuItem>
            <ListItemIcon>
                <CalendarTodayOutlinedIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Personalize</ListItemText>
        </MenuItem>
    );
};

export default Personalize;