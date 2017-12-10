import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SaveDailyExpComponent } from '../components/save-daily-exp/save-daily-exp.component';
import { DailyExpListComponent } from '../components/daily-exp-list/daily-exp-list.component';
import { DailyExpGraphComponent } from '../components/daily-exp-graph/daily-exp-graph.component';



const routes: Routes = [
    { path: 'SignIn', component: SignInComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'SaveDailyExp', component: SaveDailyExpComponent },
    { path: 'DailyExpList', component: DailyExpListComponent },
    { path: 'DailyExpGraph', component: DailyExpGraphComponent },


]


export const Routing = RouterModule.forRoot(routes);