import {atom} from "recoil";
import HomeIcon from "@mui/icons-material/Home";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export const Project = atom<OptionType>({
    key: "State.Project",
    default: {
        icon: <HomeIcon sx={{fontSize: 20, mr: 2}}/>,
        project: "My Day",
        option: "Home",
        path: "/"
    }
})
export const OptionLoader = atom({
    key: 'State.OptionLoader',
    default: true
})
export const OptionState = atom<Array<OptionType>>({
    key: 'State.OptionState',
    default: [{
        icon: <HomeIcon sx={{fontSize: 20, mr: 2}}/>,
        path: "/",
        option: "Home",
        project: "My Day"
    },{
        icon: <AddTaskIcon sx={{fontSize: 20, mr:2}}/>,
        path: "/tasks",
        option: "Tasks",
        project: "My tasks"
    },{
        icon: <ImportantDevicesIcon sx={{fontSize: 20, mr:2}}/>,
        path: "/important",
        option: "Important",
        project: "Important"
    },{
        icon: <AutoAwesomeIcon sx={{fontSize: 20, mr:2}}/>,
        path: "/planned",
        option: "Planned",
        project: "Planned"
    }]
})

export type OptionType = {
    _id?: string,
    icon?: any,
    image?: string,
    users_Id?: string,
    path?: string,
    option?: string,
    project: string,
    category?: string
}