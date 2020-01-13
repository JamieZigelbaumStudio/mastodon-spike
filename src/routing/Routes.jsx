import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Login} from "../login/components/Login";
import {Thread} from "../toots/components/Thread";

export const Routes = () => {
    const loginRoute = <Route exact path="/" component={Login} />;
    const statusRoute = <Route path="/status/:id" component={Thread} />;

    return <HashRouter>
        <Switch>
            {loginRoute}
            {statusRoute}
        </Switch>
    </HashRouter>
};