import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeComponent } from './employees/employees.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeSearchComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
