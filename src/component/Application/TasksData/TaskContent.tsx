import React from 'react';
import TitleData from "./TitleData";
import DateData from "./DateData";
import {Grid} from "@mui/material";
import useStyle from "../../../Style/Style";
import {TaskOpen, TaskOpenLoader, TaskType} from "../State/TaskState";
import {useSetRecoilState} from "recoil";
import {DrawerStateGa} from "../State/DrawerState";

const TaskContent = ({ item, index }: any) => {
    const classes = useStyle()
    const url = 'http://localhost:5000/tasks/'
    const setDrawer = useSetRecoilState(DrawerStateGa)
    const setTaskOpen = useSetRecoilState(TaskOpen)
    const setTaskOpenLoader = useSetRecoilState(TaskOpenLoader)

    const OpenTasks = ( data: TaskType ) => () => {
        setTaskOpenLoader( true )
        setDrawer(true)
        setTimeout(async () => {
            try {
                const res = await fetch( url + data._id )
                const response = await res.json()

                setTaskOpen( response )
                setTaskOpenLoader( false )
            }catch (e) {
                console.log(e)
            }
        })
    }

    return (
        <Grid className={ classes.TaskStyle } onClick={ OpenTasks( item ) }>
            <TitleData data={item} reference="task" size={20}/>
            <DateData data={item}/>
        </Grid>
    );
};

export default TaskContent;