import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {ListItemIcon, ListItemText} from "@mui/material";
import AddAlarmOutlinedIcon from '@mui/icons-material/AddAlarmOutlined';

const ListMenuFor = () => {
    return (
        <MenuItem>
            <ListItemIcon>
                <AddAlarmOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Select date and hours</ListItemText>
        </MenuItem>
    );
};

export default ListMenuFor;