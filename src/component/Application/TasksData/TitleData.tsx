import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CheckDone from "../Button/Check_Done/CheckDone";
import useStyle from "../../../Style/Style";
import TitleFormInput from "../Drawer/DrawerRight/TitleFormInput";

const TitleData = (props: any) => {
    const classes = useStyle()
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        setCheck( props.data.done )
    },[ props.data.done ])

    return (
        <Box className={classes.AlignCenter} sx={{color:"inherit"}}>
            <CheckDone fontSize={props.size}
                       reference={props.reference}
                       task={props.data}
                       check={check}
                       setCheck={setCheck}/>

            <TitleFormInput data={props.data} check={check} reference={props.reference}/>
        </Box>
    );
};

export default TitleData;