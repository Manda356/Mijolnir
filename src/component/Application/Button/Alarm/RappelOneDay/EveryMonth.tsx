import React from 'react';
import {ListItemIcon, ListItemText} from "@mui/material";
import BlurLinearOutlinedIcon from '@mui/icons-material/BlurLinearOutlined';
import MenuItem from "@mui/material/MenuItem";

const EveryMonth = ({ ChangeData }: any) => {
    return (
        <MenuItem onClick={ChangeData("Every month")}>
            <ListItemIcon>
                <BlurLinearOutlinedIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Every month</ListItemText>
        </MenuItem>
    );
};

export default EveryMonth;