import React from 'react';
import Box from "@mui/material/Box";
import {PathNameType} from "../../RecoilState/RouteState";
import useStyle from "../../Style/Style";
import {useRecoilValue} from "recoil";
import {ChangeBgImage, loaderImage} from "./State/BackgroundImage";
import LinearDeterminate from "./LinearDeterminate";
import {DrawerStateGa} from "./State/DrawerState";
import {drawerWidthRight} from "./Drawer/DrawerRight/DrawerRight";
const DifferentComponent = ({ component, path }: PathNameType) => {
    const classes = useStyle()
    const imageBg = useRecoilValue(ChangeBgImage)
    const drawer = useRecoilValue(DrawerStateGa)
    const dataLoader = useRecoilValue(loaderImage)

    const BackgroundStyle = {
        flexGrow: 1,
        pr:  `${ drawer ? drawerWidthRight : 0 }px`,
        backgroundImage: `url(${ imageBg })`,
        transitionDuration: "200ms"
    }

    return (
        <Box component="main"
             className={ classes.ImageBgContainer }
             sx={ BackgroundStyle }>
            <LinearDeterminate data={dataLoader}/>
            { component }
        </Box>
    );
};

export default DifferentComponent;