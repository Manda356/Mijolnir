import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";

const BtnDelete = ( props: any ) => {
    return (
        <Tooltip title="Delete">
            <IconButton size="small"
                        onClick={ props.DeleteData }
                        edge="end">
                <DeleteOutline/>
            </IconButton>
        </Tooltip>
    );
};

export default BtnDelete;