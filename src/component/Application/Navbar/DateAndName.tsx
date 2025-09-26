import React from 'react';
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import {useRecoilValue} from "recoil";
import {OptionType, Project} from "../State/OptionState";

const DateAndName = () => {
    const project: OptionType = useRecoilValue(Project)

    const date = new Date()
    const arrayDate = date.toDateString().split(' ')
    const dateOnMoment: string = `${ arrayDate[0]} ${arrayDate[2]} ${arrayDate[1]} ${arrayDate[3]}`

    return (
        <Box sx={{ color: '#fff',flexGrow: 1 }}>
            <Typography variant="h4" component="h1" sx={{ mb:1 }}>{ project.project }</Typography>
            <Typography variant="body2" component="p" >{ dateOnMoment }</Typography>
        </Box>
    );
};

export default DateAndName;