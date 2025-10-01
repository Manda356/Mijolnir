import React from 'react';
import {Box, Typography} from "@mui/material";
import BtnDelete from "../../Button/Check_Done/Delete/BtnDelete";
import DeleteDialog from '../../Dialog/DeleteDialog';
import {TaskOpen, TaskState, TaskType} from "../../State/TaskState";
import {useRecoilValue, useRecoilState, useSetRecoilState} from "recoil";
import {DrawerStateGa} from "../../State/DrawerState";
import {doc, deleteDoc} from "firebase/firestore";
import {db} from "../../../../firebase";

const style = {
    display: "flex",
    alignItems: "center",
    padding: 0.5,
    borderTop: "1px solid rgba(0,0,0,0.1)",
    backgroundColor: "#FFFFFF"
}

const DeleteAndTimeCreated = () => {

    const [open, setOpen] = React.useState(false);
    const [data, setData]: [Array<TaskType>,any] = useRecoilState(TaskState)
    const tasks: TaskType|any = useRecoilValue(TaskOpen)
    const setDrawer = useSetRecoilState(DrawerStateGa)
    const dataFilter = data.filter(item => item.id !== tasks._id);
    const handleClickOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const DeleteData = async () => {
        setData(dataFilter)
        setOpen(false)
        setDrawer( false )

        try {
            await deleteDoc(doc(db, "tasks", tasks._id));
        } catch (e) {
            console.error("Erreur suppression:", e);
        }
    }

    return (
        <React.Fragment>
            <Box sx={style}>
                <Typography variant="body2" sx={{ flexGrow:1, ml:2, color: "rgba(0,0,0,0.5)"}}>
                    A few minites later
                </Typography>

                <BtnDelete DeleteData={handleClickOpen}/>

                <DeleteDialog open={open}
                              handleClickOpen={handleClickOpen}
                              handleClose={handleClose}
                              category={tasks.category}
                              title={tasks.title}
                              Delete={DeleteData}/>
            </Box>
        </React.Fragment>
    );
};

export default DeleteAndTimeCreated;