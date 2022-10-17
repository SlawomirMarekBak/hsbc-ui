import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'new', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
