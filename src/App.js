import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Routes} from "./route/Routes";

function App() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    {
                        Routes.map((route, index) => {
                            return <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                component={route.component}/>
                        })}
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
