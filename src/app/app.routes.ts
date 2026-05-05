import { Route } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

export const appRoutes: Route[] = [
    {path:'', component: Home},
    {path:'about', component:About},
    {path:'projects', component:Projects},
    {path:'contact',component:Contact}
];
