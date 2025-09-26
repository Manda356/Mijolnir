import React from 'react';
import {PathNameType} from "../../RecoilState/RouteState";
import useGetData from "../Hooks/UseGetData";
import DrawerAndContainer from './Drawer/DrawerAndContainer';
import Spinner from "./Spinner/Spinner";
import {useRecoilValue} from "recoil";
import {UsersLoader} from "./State/UsersState";
import {OptionLoader} from "./State/OptionState";
import {TaskLoader} from "./State/TaskState";
const ApplicationMain = ({ component, path }: PathNameType) => {
    const response = useGetData( 'http://localhost:5000/' )
    const optionLoader = useRecoilValue(OptionLoader)
    const usersLoader = useRecoilValue(UsersLoader)
    const tasksLoader = useRecoilValue(TaskLoader)

    return (
        <React.Fragment>
            {
                !optionLoader && !usersLoader && !tasksLoader
                    ? <DrawerAndContainer component={component} path={path}/>
                    : <Spinner/>
            }
        </React.Fragment>
    );
};

export default ApplicationMain;