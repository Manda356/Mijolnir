import React, {useEffect} from 'react';
import Navbar from "../Navbar/Navbar";
import TaskForm, {dateOnMoment} from "../Task-Form/TaskForm";
import useStyle from "../../../Style/Style";
import Box from "@mui/material/Box";
import TasksData from "../TasksData/TasksData";
import {useRecoilValue} from "recoil";
import {Project} from "../State/OptionState";
import {TaskState, TaskType} from "../State/TaskState";

const MyDay = () => {
    const classes = useStyle()
    const data: Array<TaskType> = useRecoilValue(TaskState)
    const option = useRecoilValue(Project)
    const myDayData = data.filter( item => item.project === option.project && item.date === dateOnMoment )

    return (
        <Box className={classes.Column}>
            <Navbar/>
            <TasksData data={myDayData}/>
            <TaskForm/>
        </Box>
    );
};

export default MyDay;
