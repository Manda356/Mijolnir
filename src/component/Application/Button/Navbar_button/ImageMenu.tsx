import React from 'react';
import {Box, Menu} from "@mui/material";
import ImageListMenu from "./ImageList";
import AddAndImport from "./AddAndImport";
const ImageMenu = (props: any) => {

    return (
        <Menu id="basic-menu"
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleClose}
              MenuListProps={{'aria-labelledby': 'basic-button'}}>
            <Box sx={{ p:1 }}>
                <ImageListMenu setAnchorEl={props.setAnchorEl}/>
                <AddAndImport/>
            </Box>
        </Menu>
    );
};

export default ImageMenu;