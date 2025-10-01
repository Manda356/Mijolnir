import React from 'react';
import TitleData from "./TitleData";
import DateData from "./DateData";
import {Grid} from "@mui/material";
import useStyle from "../../../Style/Style";
import {TaskOpen, TaskOpenLoader, TaskType} from "../State/TaskState";
import {useSetRecoilState} from "recoil";
import {DrawerStateGa} from "../State/DrawerState";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../../firebase";

const TaskContent = ({ item, index }: any) => {
    const classes = useStyle()
    const setDrawer = useSetRecoilState(DrawerStateGa)
    const setTaskOpen = useSetRecoilState(TaskOpen)
    const setTaskOpenLoader = useSetRecoilState(TaskOpenLoader)

    const OpenTasks = ( data: TaskType ) => () => {
        setTaskOpenLoader( true )
        setDrawer(true)
        setTimeout(async () => {
            try {
                if( data.id ){// Récupère une référence au document
                    const docRef = doc(db, "tasks", data.id);// Récupère le document
                    const docSnap = await getDoc(docRef);// modifier le donner _id = id
                    const response = { _id: docSnap.id, ...docSnap.data() };
                    // affichier la tache
                    setTaskOpen(response);
                    setTaskOpenLoader(false);
                }
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