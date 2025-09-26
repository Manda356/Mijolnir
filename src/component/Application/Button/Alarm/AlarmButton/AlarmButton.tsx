import React from 'react';
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import {IconButton, Tooltip, Box, Menu, Divider, Typography} from "@mui/material";
import ListMenuOne from "./ListMenuOne";
import ListMenuTwo from "./ListMenuTwo";
import ListMenuThree from "./ListMenuThree";
import ListMenuFor from "./ListMenuFor";
import MenuForm from '../../../Task-Form/MenuForm';
import MenuList from "@mui/material/MenuList";
import {useRecoilState} from "recoil";
import {AlarmState} from "../../../State/FormState";
import DeleteRappel from "../RappelOneDay/DeleteRappel";
const AlarmButton = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const [data, setData] = useRecoilState(AlarmState)
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const ChangeData = (value: string) => () => {
        setData(value)
        setOpen(false)
    };

    const DeleteData = ()=>{
        setData( "" )
        setOpen(false)
    }
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    return (
        <Box>
            <Tooltip title={!open ? "Add alarm" : ""} arrow>
                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    sx={{ borderRadius: 2 }}
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <AccessAlarmsIcon/>

                    <Typography variant="body2"
                                sx={{ pl: 1,display: data === "" ? "none" : "flex" }}>
                        { data }
                    </Typography>
                </IconButton>
            </Tooltip>

            <MenuForm open={open}
                      setOpen={setOpen}
                      anchorRef={anchorRef}
                      component={
                          <MenuList autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}>
                              <ListMenuOne ChangeData={ChangeData}/>
                              <ListMenuTwo ChangeData={ChangeData}/>
                              <ListMenuThree ChangeData={ChangeData}/>
                              <Divider/>
                              <ListMenuFor/>
                              <DeleteRappel data={data}
                                            DeleteData={DeleteData}
                                            text={"Delete alarm"}/>
                          </MenuList>
                      }/>
        </Box>
    );
};

export default AlarmButton;