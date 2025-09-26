import React from 'react';
import {Box, Divider, IconButton, ListItemIcon, ListItemText, Tooltip, Typography} from "@mui/material";
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import MenuForm from "../../Task-Form/MenuForm";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import {useRecoilState} from "recoil";
import {CategoryFormState} from "../../State/FormState";
const Category = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const [data, setData] = useRecoilState(CategoryFormState)
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
            <Tooltip title={"Change category"} arrow>
                <IconButton ref={anchorRef}
                            id="composition-button"
                            sx={{ borderRadius: 2 }}
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}>
                    <AddHomeOutlinedIcon/>

                    <Typography variant="body2" sx={{ pl: 1 }}>
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
                              <MenuItem>
                                  <ListItemIcon>
                                      <AddHomeOutlinedIcon fontSize="small"/>
                                  </ListItemIcon>
                                  <ListItemText>{ data }</ListItemText>
                              </MenuItem>
                          </MenuList>
                      }
            />
        </Box>
    );
};

export default Category;