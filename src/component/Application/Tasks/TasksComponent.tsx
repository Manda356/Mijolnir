import React from 'react';
import Navbar from "../Navbar/Navbar";
import useStyle from "../../../Style/Style";
import Box from "@mui/material/Box";
import TaskForm from "../Task-Form/TaskForm";
import TasksData from "../TasksData/TasksData";
import {useRecoilValue} from "recoil";
import {TaskState, TaskType} from "../State/TaskState";
import {Project} from "../State/OptionState";

const TasksComponent = () => {
    const classes = useStyle()
    const data: Array<TaskType> = useRecoilValue(TaskState)
    const option = useRecoilValue(Project)
    const dataTask = data.filter( item => item.category === option.option)

    return (
        <Box className={classes.Column}>
            <Navbar/>
            <TasksData data={dataTask}/>
            <TaskForm/>
        </Box>
    );
};

export default TasksComponent;