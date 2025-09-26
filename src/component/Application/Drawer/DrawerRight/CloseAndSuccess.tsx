import React from 'react';
import {IconButton, Tooltip, Box, Grid} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useSetRecoilState} from "recoil";
import {DrawerStateGa} from "../../State/DrawerState";

const CloseAndSuccess = () => {
    const setDrawer = useSetRecoilState(DrawerStateGa)
    const CloseDrawer = () => {
        setDrawer(false)
    }

    return (
        <Box sx={{m: 0.5}}>
            <Tooltip title="close" arrow>
                <IconButton size="small"
                            edge="end"
                            onClick={CloseDrawer}
                            color="inherit">
                    <CloseIcon sx={{fontSize: 20}}/>
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default CloseAndSuccess;