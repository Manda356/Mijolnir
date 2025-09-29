import React, {useState} from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckDone from "../../Button/Check_Done/CheckDone";
import TitleFormInput from "./TitleFormInput";
import useStyle from "../../../../Style/Style";
import TitleData from "../../TasksData/TitleData";

const IssueList = ({ data }: any) => {
    const [ issueData, setIssueData ]: [Array<string>, any] = useState([])
    const dataWithIssue = {...data, issue: ""}

    const addIssue = () => {
        setIssueData([...issueData, "New issue"])
    }

    return (
        <Box>
            {/*<TitleData data={data} reference="issue" size={15}/>*/}
            {
                issueData?.map(( issue, index ) => (
                    <Box key={index}>
                        <Typography variant="body2">{ issue }</Typography>
                    </Box>
                ))
            }

            <IconButton size="small"
                        sx={{borderRadius: 1}}
                        onClick={addIssue}>
                <AddIcon sx={{fontSize:20, mr:1}}/>
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.5)" }}>
                    New issue
                </Typography>
            </IconButton>
        </Box>
    );
};

export default IssueList;