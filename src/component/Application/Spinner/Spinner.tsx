import React from 'react';
import useStyle from "../../../Style/Style";
import Box from "@mui/material/Box";
import logo from "../../../assets/logo/todo list_blue.png";
import {Avatar} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const Spinner = () => {
    const classes = useStyle()

    return (
        <Box className={classes.Center}>
            <Box className={classes.ColumnCenter}>
                <Avatar sx={{
                    width: 100,
                    height: 100,
                }} src={logo} alt="mijolnir-logo"/>

                <LinearProgress variant="indeterminate"
                                sx={{ width: '80%', mt:1, borderRadius: 5 }}/>
            </Box>
        </Box>
    );
};

export default Spinner;