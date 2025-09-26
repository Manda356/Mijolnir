import React from 'react';
import {Box, Typography} from "@mui/material";
import BtnDelete from "../../Button/Check_Done/Delete/BtnDelete";
import DeleteDialog from '../../Dialog/DeleteDialog';
import {TaskOpen, TaskState, TaskType} from "../../State/TaskState";
import {useRecoilValue, useRecoilState, useSetRecoilState} from "recoil";
import {DrawerStateGa} from "../../State/DrawerState";

const style = {
    display: "flex",
    alignItems: "center",
    padding: 0.5,
    borderTop: "1px solid rgba(0,0,0,0.1)",
    backgroundColor: "#FFFFFF"
}

const DeleteAndTimeCreated = () => {

    const url: string = "http://localhost:5000/tasks/"
    const [open, setOpen] = React.useState(false);
    const [data, setData]: [Array<TaskType>,any] = useRecoilState(TaskState)
    const tasks: TaskType|any = useRecoilValue(TaskOpen)
    const setDrawer = useSetRecoilState(DrawerStateGa)
    const dataFilter = data.filter(item => item._id !== tasks._id);
    const handleClickOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const DeleteData = async () => {
        setData(dataFilter)
        setOpen(false)
        setDrawer( false )

        try {
            const response: any = await fetch( url + tasks._id , { method: 'DELETE' })
            await response.json()
        } catch (e) {
            console.log(e)
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