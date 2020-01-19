import {Login} from "../pages/login/components/Login";
import {Thread} from "../pages/toots/components/thread/Thread";

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
    },
    {
        path: '/marketplace',
        component: Login,
        exact: true
    },
];