import React from 'react';
import Navbar from "../Navbar/Navbar";
import useStyle from "../../../Style/Style";
import Box from "@mui/material/Box";
import TaskForm from "../Task-Form/TaskForm";
import TasksData from "../TasksData/TasksData";
import {TaskState, TaskType} from "../State/TaskState";
import {useRecoilValue} from "recoil";
import {Project} from "../State/OptionState";

const Planned = () => {
    const classes = useStyle()
    const data: Array<TaskType> = useRecoilValue(TaskState)
    const option = useRecoilValue(Project)
    const plannedData = data.filter(item => item.project === option.project)

    return (
        <Box className={classes.Column}>
            <Navbar/>
            <TasksData data={plannedData}/>
            <TaskForm/>
        </Box>
    );
};

export default Planned;