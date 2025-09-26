import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {TaskOpen, TaskState, TaskType} from "../../State/TaskState";
import {useRecoilState, useSetRecoilState} from "recoil";
import useEditData from "../../../Hooks/UseEditData";

export const InputStyle = {
    background: "none",
    marginLeft: 1,
    outline: "none",
    border: "none"
}

const TitleFormInput = (props:any) => {

    const [ titleNone, setTitleNone ] = useState(true)
    const [title, setTitle] = useState("")
    const [allData, setAllData]: [Array<TaskType>, any] = useRecoilState(TaskState)
    const setTaskOpen = useSetRecoilState(TaskOpen)
    const url: string = "http://localhost:5000/tasks/"
    const ChangeAppearance = ()=>{
        setTitleNone( false )
        setTitle( props.data.title )
    }

    const ChangeTitle = (ev: React.ChangeEvent<HTMLInputElement>) => setTitle( ev.target.value )

    const EditTitle = async ()=>{
        let newTitle = allData.map(
            item =>
                item._id === props.data._id
                    ? { ...item, title: title } : item )

        setTitleNone( true )
        setAllData( newTitle )
        setTaskOpen({ ...props.data, title: title })

        await useEditData( url, props.data._id, { ...props.data, title: title })
    }

    useEffect(()=>{
        props.data.title !== undefined ? setTitle(props.data.title) : ""
    },[props.data.title])

    return (
        <Box component="form" onSubmit={ async (ev)=>{
            ev.preventDefault()
            await EditTitle()
        }}>
            <Typography variant={props.reference === "task" ? "body1" : "body2"}
                        onClick={ ChangeAppearance } noWrap
                        sx={{
                            display: titleNone ? "flex" : "none",
                            ml: 1.4,
                            textDecoration: props.check ? "line-through" : "none",
                            color: props.reference === "task" ? "inherit" : "rgba(0,0,0,0.5)"
                         }}>
                { title }
            </Typography>

            <Typography variant={props.reference === "task" ? "body1" : "body2"}
                        component="input"
                        type="text"
                        onChange={ ChangeTitle }
                        onBlur={ EditTitle }
                        value={ title }
                        name="title"
                        sx={{
                            display: !titleNone ? "flex" : "none",
                            textDecoration: props.check ? "line-through" : "none",
                            ...InputStyle, width: "100%",
                            color: props.reference === "task" ? "inherit" : "rgba(0,0,0,0.5)"
                        }}/>
        </Box>
    );
};

export default TitleFormInput;