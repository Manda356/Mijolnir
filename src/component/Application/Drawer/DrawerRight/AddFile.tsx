import React from 'react';
import {CardStyle} from "./TitleAndIssue";
import {Box, ListItemButton, Typography} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const AddFile = () => {
    return (
        <ListItemButton sx={{p:1.5}}>
            <AttachFileIcon fontSize="small" sx={{mr: 2}}/>
            <Typography variant="body2">
                Add File
            </Typography>
        </ListItemButton>
    );
};

export default AddFile;