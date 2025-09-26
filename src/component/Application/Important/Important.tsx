import React from 'react';
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import useStyle from "../../../Style/Style";
import TaskForm from "../Task-Form/TaskForm";
import TasksData from "../TasksData/TasksData";
import {useRecoilValue} from "recoil";
import {TaskState, TaskType} from "../State/TaskState";
import {Project} from "../State/OptionState";

const Important = () => {
    const classes = useStyle()
    const data: Array<TaskType> = useRecoilValue(TaskState)
    const option = useRecoilValue(Project)
    const importantData = data.filter(item => item.project === option.project)

    return (
        <Box className={classes.Column}>
            <Navbar/>
            <TasksData data={importantData}/>
            <TaskForm/>
        </Box>
    );
};

export default Important;