import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export default function AlertDialog(props: any) {

    return (
        <React.Fragment>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box minWidth={300}>
                    <DialogTitle id="alert-dialog-title" sx={{pb:1}}>
                        Delete { props.category }
                    </DialogTitle>
                    <DialogContent sx={{pt:0,pb:2}}>
                        <DialogContentText id="alert-dialog-description" variant="body2">
                            Are you sure to delete : { props.title }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.handleClose}
                                size="small"
                                color="error">cancel</Button>
                        <Button onClick={props.Delete}
                                size="small"
                                autoFocus
                                color="error">delete</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}
