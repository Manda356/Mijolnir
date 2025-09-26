import React from 'react';
import Box from "@mui/material/Box";
import {CardMedia, Grid, Typography} from "@mui/material";
import {TaskType} from "../State/TaskState";
import TaskContent from "./TaskContent";
import useStyle from "../../../Style/Style";
import logo from "../../../assets/logo/todo list_blue.png";

const ContainerStyle = {
    mt: 13,
    height: '75vh', pl:4.5, pr:4.5,
    overflow: "auto"
}

const bgContentToAdd = {
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    padding: 2,
    width: 400,
    textAlign: 'center'
}

const TasksData = ({ data }: ObjectType) => {
    const classes: any = useStyle()

    return (
        <Box sx={ ContainerStyle }>
            <Box>
                {
                    data.length === 0 ? (
                        <Box className={classes.Center} sx={{height: "calc( 100vh - 210px )"}}>
                            <Box sx={bgContentToAdd}>
                                <Box sx={{width: 200, margin: 'auto'}}>
                                    <CardMedia component="img"
                                               height={200}
                                               image={logo}
                                               alt="logo-picture"/>
                                </Box>
                                <Typography variant="body1">Add new task</Typography>
                                <Typography variant="caption">In this moment add new task</Typography>
                            </Box>
                        </Box>
                    ) : (
                        <Grid container spacing={0.7}>
                            {
                                data.map((item, index) => (
                                    <Grid key={index} item sm={6} md={4} lg={3}>
                                        <TaskContent item={item} index={index}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    )
                }
            </Box>
        </Box>
    );
};

export default TasksData;

export type ObjectType = { data: Array<TaskType> }