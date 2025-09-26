import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {PathNameType, RouteState} from "../../RecoilState/RouteState";
import {useRecoilValue} from "recoil";
import ApplicationMain from "../Application/ApplicationMain";
import Sign_up from "../Authentification/Sign_up";
import Sign_in from "../Authentification/Sign_in";

const AppRoute = () => {

    const RouteList: Array<PathNameType> = useRecoilValue(RouteState)

    return (
        <Router>
            <Routes>

                {
                    RouteList?.map((item,index) => (
                        <Route key={ index }
                               path={ item.path }
                               element={<ApplicationMain component={item.component} path={item.path}/>}/>
                    ))
                }

                <Route path="/sign_in" element={<Sign_in />}/>
                <Route path="/sign_up" element={<Sign_up />}/>
            </Routes>
        </Router>
    );
};

export default AppRoute;