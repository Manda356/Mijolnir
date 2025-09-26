import React from 'react';
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const MenuForm = ({ open, setOpen ,anchorRef, component }: any) => {
    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Popper open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ width: 250, maxWidth: '100%' }}>
            {({ TransitionProps, placement }) => (
                <Grow {...TransitionProps}
                      style={{
                          transformOrigin:
                              placement === 'bottom-start' ? 'left top' : 'left bottom',
                          color: "inherit"
                      }}>
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            { component }
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    );
};

export default MenuForm;