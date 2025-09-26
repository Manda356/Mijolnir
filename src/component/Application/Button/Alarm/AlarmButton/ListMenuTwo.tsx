import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {ListItemIcon, ListItemText, Typography} from "@mui/material";
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
const ListMenuTwo = ({ChangeData}: any) => {
    return (
        <MenuItem onClick={ChangeData("thu, 09:00")}>
            <ListItemIcon>
                <KeyboardTabIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Tomorrow</ListItemText>
            <Typography variant="body2" color="text.secondary">
                thu, 09:00
            </Typography>
        </MenuItem>
    );
};

export default ListMenuTwo;