import React from 'react';
import {ListItemIcon, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from "@mui/material/MenuItem";

const DeleteRappel = ({ data, DeleteData, text }: any) => {
    return (
        <MenuItem sx={{display: data === "" ? "none" : "flex"}}
                  onClick={DeleteData}>
            <ListItemIcon>
                <DeleteIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>{text}</ListItemText>
        </MenuItem>
    );
};

export default DeleteRappel;