import React from 'react';
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {Tooltip} from "@mui/material";
import {useRecoilState,} from "recoil";
import {TaskOpen, TaskState, TaskType} from "../../State/TaskState";
import PicAudio from "../../../../assets/Audio/Pic.mp3";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../../../firebase";

const CheckDone = ( props: any ) => {
    const [tasksData, setTasksData] = useRecoilState(TaskState)
    const CheckDone = async () => {

        if( props.reference === "task" ){
            const songs = new Audio( PicAudio )
            const newData: any = tasksData.map(( item: TaskType ) => item.id === props.task._id ? { ...props.task, done: !props.check } : item)

            try {
                const taskRef = doc(db, "tasks", props.task._id);

                await updateDoc(taskRef, {
                    ...props.task,
                    done: !props.check
                });

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