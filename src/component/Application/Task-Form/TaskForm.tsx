import React, {useState} from 'react';
import Box from "@mui/material/Box";
import useStyle from "../../../Style/Style";
import CheckDone from "../Button/Check_Done/CheckDone";
import TaskInput from "./TaskInput";
import FormTools from "./FormTools";
import usePostData from "../../Hooks/UsePostData";
import {useRecoilValue} from "recoil";
import {AlarmState, CategoryFormState, RappelState} from "../State/FormState";
import {Project} from "../State/OptionState";
import {TaskType} from "../State/TaskState";

const date = new Date()
const arrayDate = date.toDateString().split(' ')
export const dateOnMoment: string = `${arrayDate[2]}-${arrayDate[3].slice(-2)} ${arrayDate[1]}`
const TaskForm = () => {
    const classes = useStyle()
    const [check, setCheck] = useState(false)

    const alarm= useRecoilValue(AlarmState)
    const rappel= useRecoilValue(RappelState)
    const category= useRecoilValue(CategoryFormState)
    const project = useRecoilValue(Project)

    const url: string = "http://localhost:5000/tasks/"

    const data: TaskType = {
        users_Id: project.users_Id,
        option_Id: project._id,
        project: project.project,
        done: check,
        date: dateOnMoment, category
    }

    if(alarm !== "") data.alarm = alarm

    else if(rappel !== "") data.rappel = rappel

    const PostData: any = usePostData(url, data)

    return (
        <Box sx={{ pt: 3, pb: 3, pl: 4.5 , pr: 4.5 }}>
            <Box className={ classes.FormStyle }
                 onSubmit={ PostData }
                 component="form">
                <CheckDone fontSize={25}
                           reference="form"
                           check={check}
                           setCheck={setCheck}/>
                <TaskInput/>
                <FormTools/>
            </Box>
        </Box>
    );
};

export default TaskForm;