import React from 'react';
import {Typography} from "@mui/material";

export const InputStyle = {
    background: "transparent",
    marginLeft: 1.5,
    outline: "none",
    border: "none",
    color: "inherit"
}
const TaskInput = () => {
    return (
        <Typography variant="body2"
                    component="input"
                    placeholder="Add new task"
                    type="text"
                    name="title"
                    sx={{ ...InputStyle,
                        width: `80%`,
                        mr: 2, flexGrow: 1
                    }}/>
    );
};

export default TaskInput;