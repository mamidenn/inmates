import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoresComponent } from './chores/chores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChoreDetailComponent } from './chore-detail/chore-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'chores', component: ChoresComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ChoreDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
