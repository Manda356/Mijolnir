import React from 'react';
import {ListItemIcon, ListItemText} from "@mui/material";
import BlurLinearOutlinedIcon from '@mui/icons-material/BlurLinearOutlined';
import MenuItem from "@mui/material/MenuItem";

const DayOfTheWeek = ({ ChangeData }: any) => {
    return (
        <MenuItem onClick={ChangeData("Day of the week")}>
            <ListItemIcon>
                <BlurLinearOutlinedIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Day of the week</ListItemText>
        </MenuItem>
    );
};

export default DayOfTheWeek;