import React, {Component} from 'react';
import {Box, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";

type AddAndImportType = {
    icon: any,
    text: string
}

export const addDayStyle = {
    p: 1.5,
    display: "flex",
    alignItems: "center",
    color: "rgba(0,0,0,0.5)",
    '&:hover': {
        bgcolor: "rgba(0,0,0,0.1)"
    },
    transitionDuration: '300ms',
    cursor: 'pointer'
}

const AddAndImport = () => {

    const selectTouche: Array<AddAndImportType> = [
        {
            icon: <AddIcon sx={{mr: 2}}/>,
            text: 'More image'
        }, {
            icon: <PrintIcon sx={{mr: 2}}/>,
            text: 'Import image'
        }
    ]

    return (
        <Box sx={{pt:1}}>
            { selectTouche.map((item, index) => (
                <Box key={index} sx={{ ...addDayStyle }}>
                    { item.icon }
                    <Typography variant="body2">{ item.text }</Typography>
                </Box>
            )) }
        </Box>
    );
};

export default AddAndImport;