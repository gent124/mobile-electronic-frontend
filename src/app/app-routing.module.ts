import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './components/bills/bills.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { StockComponent } from './components/stock/stock.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard]},
  { path: 'stock', component: StockComponent, canActivate: [AuthGuard]},
  { path: 'bills', component: BillsComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
