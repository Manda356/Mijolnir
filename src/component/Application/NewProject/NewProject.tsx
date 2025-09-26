import React from 'react';
import useStyle from "../../../Style/Style";
import {TaskState, TaskType} from "../State/TaskState";
import {useRecoilValue} from "recoil";
import {Project} from "../State/OptionState";
import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";
import TasksData from "../TasksData/TasksData";
import TaskForm from "../Task-Form/TaskForm";

const NewProject = () => {
    const classes = useStyle()
    const data: Array<TaskType> = useRecoilValue(TaskState)
    const option = useRecoilValue(Project)
    const newProject = data.filter(item => item.project === option.project)

    return (
        <Box className={classes.Column}>
            <Navbar/>
            <TasksData data={newProject}/>
            <TaskForm/>
        </Box>
    );
};

export default NewProject;