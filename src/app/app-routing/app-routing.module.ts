import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchEmployeeComponent } from './../modules/employees/components/search-employee/search-employee.component';
import { AddEmployeeComponent } from './../modules/employees/components/add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    component: AddEmployeeComponent,
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
  },
  {
    path: 'search-employee',
    component: SearchEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
