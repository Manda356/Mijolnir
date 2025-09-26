import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {ListItemIcon, ListItemText} from "@mui/material";
import BlurLinearOutlinedIcon from '@mui/icons-material/BlurLinearOutlined';
const EveryDay = ({ChangeData}: any) => {

    return (
        <MenuItem onClick={ChangeData("Every day")}>
            <ListItemIcon>
                <BlurLinearOutlinedIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Every day</ListItemText>
        </MenuItem>
    );
};

export default EveryDay;