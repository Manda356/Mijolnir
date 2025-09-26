import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {ListItemIcon, ListItemText, Typography} from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const ListMenuThree = ({ChangeData}: any) => {
    return (
        <MenuItem onClick={ChangeData("mon, 09:00")}>
            <ListItemIcon>
                <KeyboardDoubleArrowRightIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Next week</ListItemText>
            <Typography variant="body2" color="text.secondary">
                mon, 09:00
            </Typography>
        </MenuItem>
    );
};

export default ListMenuThree;