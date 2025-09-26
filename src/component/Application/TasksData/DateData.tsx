import React from 'react';
import {Avatar, IconButton, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import useStyle from "../../../Style/Style";

const DateData = ({ data }: any) => {
    const classes = useStyle()

    return (
        <Box className={classes.AlignCenter} sx={{ mt:1 }}>
            <IconButton size="small" sx={{ mr:1 }}>
                <Avatar sx={{ height: 20, width: 20 }}/>
            </IconButton>
            <Typography variant="caption">
                { data.date }
            </Typography>
        </Box>
    );
};

export default DateData;