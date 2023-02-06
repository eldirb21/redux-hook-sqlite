import Login from '../views/auth/login';
import Regist from '../views/auth/regist';
import Home from '../views/home';
import Profile from '../views/profile';
import Scann from '../views/scann';
import RootTab from './RootTab';
export const stackData = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Regist',
    component: Regist,
  },
  {
    name: 'RootTab',
    component: RootTab,
  },
];
export const tabData = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Scann',
    component: Scann,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];
