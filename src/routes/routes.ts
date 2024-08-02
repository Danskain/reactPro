import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazyloadone/pages/NoLazy';
//import { LazyPageOne, LazyPageTwo, LazyPageThree } from './../lazyloadone/pages';

type JSXComponent = () => JSX.Element

interface Route {
    to:         string;
    path:       string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent;
    name:       string
}

//const Home = lazy(() => import (/* webpackChunkName: "Home" */ '../lazyloadone/pages/LazyPageOne'))
//const About = lazy(() => import (/* webpackChunkName: "About" */'../lazyloadone/pages/LazyPageTwo'))
//const Users = lazy(() => import (/* webpackChunkName: "Users" */'../lazyloadone/pages/LazyPageThree'))
const LazyLayout = lazy(() => import (/* webpackChunkName: "Users" */'../lazyloadone/layout/LazyLayout'))

export const routes: Route[] = [
    /* {
        to:         '/home',
        path:       'home',
        Component:  Home,
        name:       'Home'
    },
    {
        to:         '/about',
        path:       'about',
        Component:  About,
        name:       'About'
    },
    {
        to:         '/users',
        path:       'users',
        Component:  Users,
        name:       'Users'
    }, */
    {
        to:         '/lazyoad/',
        path:       '/lazyoad/*',
        Component:  LazyLayout,
        name:       'Dashboard'
    },
    {
        to:         '/nolazy',
        path:       'nolazy',
        Component:  NoLazy,
        name:       'No lazy'
    },
]