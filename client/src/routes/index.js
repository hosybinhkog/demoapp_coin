import { Home, Login, Register, Dashboard, NotFound, Deposit, Blog } from '~/pages';

import { LayoutSignUp } from '../components';

const routes = {};

routes.publicRoute = [
  {
    path: '/',
    component: Home,
    title: 'Home',
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
    layout: LayoutSignUp,
  },
  {
    path: '/register',
    component: Register,
    title: 'Register',
    layout: LayoutSignUp,
  },
  {
    path: '/deposit',
    component: Deposit,
    title: 'Deposit',
  },
  {
    path: '/blog',
    component: Blog,
    title: 'Blog',
  },
  {
    path: '*',
    component: NotFound,
    title: 'Not Found',
  },
];

routes.private = [
  {
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    layout: LayoutSignUp,
  },
];

routes.privateAdmin = [{}];

export default routes;
