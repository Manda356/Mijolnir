import React from 'react'
import {Box, Divider, IconButton, Tooltip, Typography} from '@mui/material';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import EveryDay from "./EveryDay";
import DayOfTheWeek from "./DayOfTheWeek";
import EveryWeek from "./EveryWeek";
import EveryMonth from "./EveryMonth";
import EveryYear from "./EveryYear";
import Personalize from "./Personalize";
import MenuList from "@mui/material/MenuList";
import MenuForm from '../../../Task-Form/MenuForm';
import {useRecoilState} from "recoil";
import {RappelState} from "../../../State/FormState";
import DeleteRappel from "./DeleteRappel";

const RappelOnDay = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const [data, setData] = useRecoilState(RappelState)
    const ChangeData = ( day: string )=> ()=>{
        setData( day )
        setOpen(false)
    }
    const DeleteData = ()=>{
        setData( "" )
        setOpen(false)
    }
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
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
            <Tooltip title={!open ? "Rappel" : ""} arrow>
                <IconButton ref={anchorRef}
                            id="composition-button"
                            sx={{ borderRadius: 2 }}
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}>
                    <EventNoteOutlinedIcon/>

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
                              <EveryDay ChangeData={ChangeData}/>
                              <DayOfTheWeek ChangeData={ChangeData}/>
                              <EveryWeek ChangeData={ChangeData}/>
                              <EveryMonth ChangeData={ChangeData}/>
                              <EveryYear ChangeData={ChangeData}/>
                              <Personalize/>
                              <Divider sx={{ display: data === "" ? "none" : "flex" }}/>
                              <DeleteRappel data={data}
                                            DeleteData={DeleteData}
                                            text={"Don't repeat"}/>
                          </MenuList>
                      }/>
        </Box>
    );
};

export default RappelOnDay;