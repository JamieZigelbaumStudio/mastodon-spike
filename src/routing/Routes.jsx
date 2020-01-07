import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Login} from "../login/components/Login";
import {TootThread} from "../toots/components/TootThread";

export const Routes = () => {
    const loginRoute = <Route exact path="/" component={Login} />;
    const statusRoute = <Route path="/status/:id" component={TootThread} />;

    return <HashRouter>
        <Switch>
            {loginRoute}
            {statusRoute}
        </Switch>
    </HashRouter>
};