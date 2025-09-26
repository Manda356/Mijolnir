import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LinearDeterminate = ({ data }: any) => {

    const style = {
        width: '100%',
        display: data ? 'block' : 'none',
        position: 'absolute',
        top: 0,
        left: 0
    }

    return (
        <Box sx={style}>
            <LinearProgress variant="indeterminate"/>
        </Box>
    );
};

export default LinearDeterminate;
