import {RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DetailsComponent} from './components/details/details.component';
import {AboutComponent} from './components/about/about.component';

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'details', component: DetailsComponent },
{ path: 'about', component: AboutComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' },

]; 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
