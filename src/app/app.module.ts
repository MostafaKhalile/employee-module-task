import { FooterComponent } from './shared/components/footer/footer.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddEmployeeComponent } from './modules/employees/components/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './modules/employees/components/search-employee/search-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    FooterComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
