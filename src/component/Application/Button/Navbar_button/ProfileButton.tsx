import React, {useState} from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import {Menu, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {useSetRecoilState} from "recoil";
import {DrawerStateGa} from "../../State/DrawerState";
import { getAuth, signOut } from "firebase/auth";

const LogoutModal = (props: any) => {
    const auth = getAuth();

    const logoutYes = async () => {
        try {
            await signOut(auth);
            // Déconnecté avec succès"
            location.reload() //actualiser la page
        } catch (error) {
            console.error("❌ Erreur lors de la déconnexion:", error);
        }
    }

    return (
        <React.Fragment>
            <Dialog
                open={props.open}
                onClose={props.logoutNo}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box minWidth={300}>
                    <DialogTitle id="alert-dialog-title" sx={{pb:1}}>
                        Logout
                    </DialogTitle>
                    <DialogContent sx={{pt:0,pb:2}}>
                        <DialogContentText id="alert-dialog-description" variant="body2">
                            Are you sure to logout
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={logoutYes}
                                size="small"
                                color="info">Yes</Button>
                        <Button onClick={props.logoutNo}
                                size="small"
                                autoFocus
                                color="info">No</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </React.Fragment>
    )
}

const ProfileButton = () => {
    const navigate = useNavigate()
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget)
    const handleCloseUserMenu = () => setAnchorElUser(null)
    const [logoutOpen, setLogoutOpen] = useState(false)
    const logout = () => setLogoutOpen(true)
    const logoutNo = () => setLogoutOpen(false)

    const setDrawer = useSetRecoilState(DrawerStateGa)

    const navToProfile =() => {
        setAnchorElUser(null)
        setDrawer(false)
        navigate('/profile')
    }

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton size="small"
                                onClick={handleOpenUserMenu}
                                aria-haspopup="true">
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={navToProfile}>
                        <Typography textAlign="center" variant="body2" >Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={logout}>
                        <Typography textAlign="center" variant="body2" >Logout</Typography>
                    </MenuItem>
                    <LogoutModal open={logoutOpen} logoutNo={logoutNo}/>
                </Menu>
            </Box>
        </React.Fragment>
    );
};

export default ProfileButton;