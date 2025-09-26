import React from 'react';
import {ListItemIcon, ListItemText} from "@mui/material";
import BlurLinearOutlinedIcon from '@mui/icons-material/BlurLinearOutlined';
import MenuItem from "@mui/material/MenuItem";

const EveryYear = ({ ChangeData }: any) => {
    return (
        <MenuItem onClick={ ChangeData("Every year") }>
            <ListItemIcon>
                <BlurLinearOutlinedIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Every year</ListItemText>
        </MenuItem>
    );
};

export default EveryYear;