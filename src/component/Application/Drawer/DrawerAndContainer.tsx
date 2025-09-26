import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import DrawerLeft from "./Drawerleft/DrawerLeft";
import {PathNameType} from "../../../RecoilState/RouteState";
import DifferentComponent from "../DifferentComponent";
import CategoryForm from "./Drawerleft/CategoryForm";

export const drawerWidth = 240;

export default function ResponsiveDrawer({ component, path }: PathNameType) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = ( <DrawerLeft/> );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="nav"
                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                 aria-label="mailbox folders">

                <Drawer variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{ display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },}}>
                    {drawer}
                </Drawer>

                <Drawer variant="permanent"
                        sx={{ display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },}} open>
                    {drawer}
                    <CategoryForm/>
                </Drawer>
            </Box>

            <DifferentComponent component={component} path={path}/>

        </Box>
    );
}