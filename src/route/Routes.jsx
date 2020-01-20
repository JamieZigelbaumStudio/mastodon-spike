import {Login} from "../pages/login/components/Login";
import {Thread} from "../pages/toots/components/thread/Thread";
import {Marketplace} from "../pages/marketplace/components/Marketplace";

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
        component: Marketplace,
        exact: true
    },
];