import {ListItemButton, Typography} from '@mui/material';
import React from 'react';
import DescriptionIcon from "@mui/icons-material/Description";

const AddTheDescription = () => {
    return (
        <ListItemButton sx={{p:1.5}}>
            <DescriptionIcon fontSize="small"/>

            <Typography variant="body2" sx={{ ml: 2 }}>
                Add the description
            </Typography>
        </ListItemButton>
    );
};

export default AddTheDescription;