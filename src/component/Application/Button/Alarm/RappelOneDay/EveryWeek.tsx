import React from 'react';
import {ListItemIcon, ListItemText} from "@mui/material";
import BlurLinearOutlinedIcon from '@mui/icons-material/BlurLinearOutlined';
import MenuItem from "@mui/material/MenuItem";

const EveryWeek = ({ ChangeData }: any) => {
    return (
        <MenuItem onClick={ChangeData("Every week")}>
            <ListItemIcon>
                <BlurLinearOutlinedIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Every week</ListItemText>
        </MenuItem>
    );
};

export default EveryWeek;