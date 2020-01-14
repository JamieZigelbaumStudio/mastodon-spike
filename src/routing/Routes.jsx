import React from "react";
import {Login} from "../login/components/Login";
import {Thread} from "../toots/components/Thread";

export const Routes = [
    {
        path: '/',
        component: Login,
        exact: true
    },
    {
        path: '/status/:id',
        component: Thread,
        exact: true
    }];