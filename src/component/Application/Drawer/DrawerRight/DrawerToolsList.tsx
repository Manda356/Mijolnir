import React from 'react';
import {Box, Typography} from "@mui/material";
import TitleAndIssue, {CardStyle} from "./TitleAndIssue";
import AddToMyDay from "./AddToMyDay";
import AddAlarm from "./AddAlarm";
import AddFile from "./AddFile";
import AddTheDescription from "./AddTheDescription";
import {useRecoilValue} from "recoil";
import {TaskOpen} from "../../State/TaskState";

const DrawerToolsList = () => {
    const tasks = useRecoilValue(TaskOpen)

    const toolsList = [
        <TitleAndIssue tasks={tasks}/>,
        <AddToMyDay/>,
        <AddAlarm/>,
        <AddFile/>,
        <AddTheDescription/>
    ]

    return (
        <Box sx={{flexGrow: 1}}>
            {
                toolsList.map((item, index)=>(
                    <Box sx={CardStyle} key={index}>
                        { item }
                    </Box>
                ))
            }
        </Box>
    );
};

export default DrawerToolsList;