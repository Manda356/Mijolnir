import React from 'react';
import {Link, Typography} from "@mui/material";

const Copyright = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://manda-portfolio.webflow.io/">Manda Herimbola</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default Copyright;