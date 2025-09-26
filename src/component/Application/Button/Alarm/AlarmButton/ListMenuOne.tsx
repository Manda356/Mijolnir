import React, {useEffect} from 'react';
import MenuItem from "@mui/material/MenuItem";
import {ListItemIcon, ListItemText, Typography} from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';
const ListMenuOne = ({ ChangeData }:any) => {
    const date = new Date()
    const newHours = date.getHours() + 4

    return (
        <MenuItem onClick={ChangeData(`${ newHours }:00`)}>
            <ListItemIcon>
                <UpdateIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Later in the day</ListItemText>
            <Typography variant="body2" color="text.secondary">
                { newHours }:00
            </Typography>
        </MenuItem>
    );
};

export default ListMenuOne;