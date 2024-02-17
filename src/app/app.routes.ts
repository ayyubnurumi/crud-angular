import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewDetailEmployeeComponent } from './view-detail-employee/view-detail-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'list', component: ListEmployeesComponent },
    { path: 'add', component: AddEmployeeComponent },
    { path: 'edit/:id', component: EditEmployeeComponent },
    { path: 'detail/:id', component: ViewDetailEmployeeComponent },
    { path: '**', component: PageNotFoundComponent } 
  ];
