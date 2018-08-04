import React from 'react';
import { Home, Timer} from './components';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/contents',
        exact: false,
        main: () => <Timer.Minute minutes={1} />
    },
    {
        path: '/contents1',
        exact: false,
        main: () => <Timer.Ampm />
    },
    {
        path: '/contents3',
        exact: false,
        main: () => <Timer.Hour />
    },
    {
        path: '/contents4',
        exact: false,
        main: () => <div>Seconds :  <Timer.Second seconds={51} /> </div>
    },

];
export default routes;