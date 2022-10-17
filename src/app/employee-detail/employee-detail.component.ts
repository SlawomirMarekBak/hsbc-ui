import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | undefined;
  isEdit = true;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.employeeService
        .getEmployee(id)
        .subscribe((employee) => (this.employee = employee));
    } else {
      this.employee = {} as Employee;
      this.isEdit = false;
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.employee) {
      if (this.isEdit) {
        this.employeeService
          .updateEmployee(this.employee)
          .subscribe(() => this.goBack());
      } else {
        this.employeeService
          .addEmployee(this.employee)
          .subscribe(() => this.goBack());
      }
    }
  }
}
