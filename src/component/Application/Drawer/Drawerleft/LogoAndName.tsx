import React from 'react';
import {Avatar, Skeleton} from "@mui/material";
import logo from "../../../../assets/logo/todo list_blue.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {UsersState, UsersType} from "../../State/UsersState";
import {useRecoilValue} from "recoil";

const LogoAndName = () => {
    const users: UsersType = useRecoilValue(UsersState)

    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>

            { users.email === undefined ?
                    <Skeleton variant="circular" width={35} height={35} sx={{mr:1.5}}/> :
                    <Avatar sx={{ mr:1.5 }} src={logo} alt="mijolnir-logo"/> }

            <Box sx={{ width: 150 }}>

                { users.email === undefined ?
                    <Skeleton variant="rounded"/> :
                    <Typography variant="h6" component="h2">Mijolnir</Typography> }

                { users.email === undefined ?
                    <Skeleton variant="text" height={20}/> :
                    <Typography variant="caption" sx={{color: "rgba(0,0,0,0.5)"}}
                                component="p" noWrap>{ users.email }</Typography> }

            </Box>
        </Box>
    );
};

export default LogoAndName;