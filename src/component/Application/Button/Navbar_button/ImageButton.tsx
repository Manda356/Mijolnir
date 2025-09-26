import React, {useEffect} from 'react';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";
import {Box, ImageList, ImageListItem, Menu, Skeleton, Typography} from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import AddIcon from '@mui/icons-material/Add';
import ImageMenu from "./ImageMenu";

const ImageButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Box>
            <IconButton edge="start"
                        color="inherit"
                        onClick={handleClick}>
                <AddPhotoAlternateIcon />
            </IconButton>

            <ImageMenu open={open}
                       anchorEl={anchorEl}
                       setAnchorEl={setAnchorEl}
                       handleClose={handleClose}/>
        </Box>
    );
};

export default ImageButton;