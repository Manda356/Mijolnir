import React from 'react';
import {Grid, Link} from "@mui/material";

const AuthLink = () => {
    return (
        <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="/sign_up" variant="body2">
                    {"Don't have an account?"}
                </Link>
            </Grid>
        </Grid>
    );
};

export default AuthLink;