import React from 'react';
import {RecoilRoot} from "recoil";
import AppRoute from "./component/Routes/AppRoute";

const App = () => {

    return (
        <React.Fragment>
            <RecoilRoot>
                <AppRoute />
            </RecoilRoot>
        </React.Fragment>
    );

};

export default App;