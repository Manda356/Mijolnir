import React from 'react';
import Box from "@mui/material/Box";
import AlarmButton from "../Button/Alarm/AlarmButton/AlarmButton";
import RappelOnDay from "../Button/Alarm/RappelOneDay/RappelOnDay";
import Category from "../Button/CategoryButton/Category";

const FormTools = () => {
    return (
        <Box sx={{ display:"flex", alignItems: "center",
            "& .MuiTypography-root":{ fontSize: 13 }}}>
            <Category/>
            <AlarmButton/>
            <RappelOnDay/>
        </Box>
    );
};

export default FormTools;