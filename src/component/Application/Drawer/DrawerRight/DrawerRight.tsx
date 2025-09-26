import React from 'react';
import Drawer from "@mui/material/Drawer";
import {useRecoilValue} from "recoil";
import {DrawerStateGa} from "../../State/DrawerState";
import CloseAndSuccess from "./CloseAndSuccess";
import DrawerToolsList from "./DrawerToolsList";
import DeleteAndTimeCreated from './DeleteAndTimeCreated';
import LinearDeterminate from "../../LinearDeterminate";
import {TaskOpenLoader} from "../../State/TaskState";

export const drawerWidthRight = 300
const DrawerRight = () => {
    const drawer = useRecoilValue(DrawerStateGa)
    const loader = useRecoilValue(TaskOpenLoader)

    return (
        <React.Fragment>
            <Drawer sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper':
                    { width: drawerWidthRight, backgroundColor: "rgb(255,255,255,0.9)" } }}
                    variant="persistent"
                    anchor="right"
                    open={ drawer }>
                <LinearDeterminate data={loader}/>
                <CloseAndSuccess/>
                <DrawerToolsList/>
                <DeleteAndTimeCreated/>
            </Drawer>
        </React.Fragment>
    );
};

export default DrawerRight;