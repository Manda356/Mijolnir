import React from 'react';
import {Box, ListItemButton, Typography} from "@mui/material";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";

const AddAlarm = () => {
    const AlarmComponent = [
        {
            icon: <AddHomeOutlinedIcon fontSize="small" sx={{mr:2}}/>,
            text: "Category"
        },{
            icon: <AccessAlarmsIcon fontSize="small" sx={{mr:2}}/>,
            text: "Alarm"
        },{
            icon: <EventNoteOutlinedIcon fontSize="small" sx={{mr:2}}/>,
            text: "Rappel"
        }
    ]

    return (
        <Box>
            {
                AlarmComponent.map((item, index)=>(
                    <ListItemButton key={index}
                                    sx={{p:1.5, borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
                        {item.icon}

                        <Typography variant="body2">
                            {item.text}
                        </Typography>
                    </ListItemButton>
                ))
            }
        </Box>
    );
};

export default AddAlarm;