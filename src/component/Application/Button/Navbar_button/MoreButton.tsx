import React from 'react';
import {Box, IconButton} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {useSetRecoilState} from "recoil";
import {DrawerStateGa} from "../../State/DrawerState";
import DrawerRight from "../../Drawer/DrawerRight/DrawerRight";

const MoreButton = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const setDrawerRight = useSetRecoilState(DrawerStateGa)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setDrawerRight(true)
    };

    return (
        <Box>
            <IconButton edge="start"
                        color="inherit"
                        onClick={handleClick}>
                <MoreHorizIcon />
            </IconButton>

            <DrawerRight/>
        </Box>
    );
};

export default MoreButton;