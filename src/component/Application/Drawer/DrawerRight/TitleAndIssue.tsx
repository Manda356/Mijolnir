import React from 'react';
import {Box} from "@mui/material";
import TitleData from "../../TasksData/TitleData";
import IssueList from "./IssueList";

export const CardStyle = {
    bgcolor: "rgb(255,255,255)",
    borderRadius: 1,
    border: 1,
    borderColor: "rgba(0,0,0,0.1)",
    ml: 1, mr: 1, mb: 1,
    color: 'rgb(95,95,95)'
}
const TitleAndIssue = ({ tasks }: any) => {
    return (
        <Box sx={{p:1}}>
            <TitleData data={tasks} reference="task" size={20}/>
            <IssueList data={tasks}/>
        </Box>
    );
};

export default TitleAndIssue;