import React from 'react';
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {Tooltip} from "@mui/material";
import {useRecoilState, useRecoilValue} from "recoil";
import {TaskOpen, TaskState, TaskType} from "../../State/TaskState";
import PicAudio from "../../../../assets/Audio/Pic.mp3";

const CheckDone = ( props: any ) => {
    const url = 'http://localhost:5000/tasks/'
    const [tasksData, setTasksData] = useRecoilState(TaskState)
    const CheckDone = async () => {

        if( props.reference === "task" ){
            const songs = new Audio( PicAudio )
            const newData: any = tasksData.map(( item: TaskType ) => item._id === props.task._id ? { ...props.task, done: !props.check } : item)

            try {

                await fetch( url + props.task._id,{
                    method: "PUT",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ ...props.task, done: !props.check })
                })

                props.setCheck(!props.check)

                !props.check ? songs.play() : songs.pause()

                setTasksData( newData )

            }catch (e) {
                console.log(e)
            }
        }else{
            props.setCheck(!props.check)
        }
    }

    return (
        <Tooltip title={ !props.check ? "Done" : "Remove done" } arrow>
            <IconButton size="small"
                        edge="end"
                        onClick={CheckDone}
                        sx={{
                            color: props.reference === "task" ? "inherit" : "rgba(0,0,0,0.5)",
                            ml: props.reference === "task" ? 0 : 0.4
                        }}>
                {
                    props.check
                        ? <CheckCircleIcon sx={{fontSize: props.fontSize}}/>
                        : <CheckCircleOutlineIcon sx={{fontSize: props.fontSize}}/>
                }
            </IconButton>
        </Tooltip>
    );
};

export default CheckDone;