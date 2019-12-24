import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Login} from "../login/components/Login";

export const Routes = () => {
    const loginRoute = <Route path="/" component={Login} />;

    return <HashRouter>
        <Switch>
            {loginRoute}
        </Switch>
    </HashRouter>
};