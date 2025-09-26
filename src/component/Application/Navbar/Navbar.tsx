import React from 'react';
import {AppBar, drawerWidth} from "../../../Style/MuiStyle";
import {Toolbar} from "@mui/material";
import DateAndName from "./DateAndName";
import ToolsList from "./ToolsList";
import {useRecoilValue} from "recoil";
import {DrawerStateGa} from "../State/DrawerState";
import {drawerWidthRight} from "../Drawer/DrawerRight/DrawerRight";

const Navbar = () => {
    const drawerRight = useRecoilValue(DrawerStateGa)
    const drawerMargin = drawerRight ? `${drawerWidthRight}px` : 0

    return (
        <AppBar position="absolute"
                open={true}
                sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, pr: drawerMargin }}>
            <Toolbar>
                <DateAndName/>
                <ToolsList/>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;